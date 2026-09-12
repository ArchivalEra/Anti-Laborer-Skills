#!/usr/bin/env python3
"""
Source Evaluator - Deterministic Multi-Stage Content Filter
Part of the Anti-Laborer-Skills repository.

Provides:
- L1 Fast-path Hard-cut: Drops ideological bickering, political mudslinging, pure emotional venting,
  and anti-intellectual brute-force labor worship.
- L2 SNR Gate: Verifies proposition structure, data/evidence density, and fallacy markers.
- L3 Extraction Card Generation: Formats valid empirical discourse for downstream skill crafting.
"""

from __future__ import annotations
import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass
from typing import Any, Dict, List, Optional, Tuple

# -----------------------------------------------------------------------------
# L1 Fast-Path Hard-Cut Regex Patterns
# -----------------------------------------------------------------------------

# Ideological and factional mudslinging (political bickering / agitprop)
IDEOLOGICAL_PATTERNS = [
    r"(?i)\b(润人|神友|兔友|粉红|反贼|公知|五毛|殖人|小粉红|键政|汉奸|带路党)\b",
    r"(?i)\b(支[那那那]|支性|nmsl|sb|脑瘫|死全家|傻逼|操你妈)\b",
    r"(?i)\b(觉醒年代|赢麻了|输麻了|大棋党|境外势力|屁股歪了|立场问题)\b",
    r"(?i)\b(woke|maga|tankie|libtard|cuck|chicom|shill|bot)\b",
]

# Pure emotional venting & nihilistic shouting (zero empirical content)
VENTING_PATTERNS = [
    r"(?i)(气死我了|恶心透顶|绝望了|赶紧毁灭吧|全都该死|什么垃圾东西|笑死爹了)",
    r"(?i)[!！?？]{3,}",  # Excessive aggressive punctuation
]

# Laborer Mentality (Anti-Intellectualism / Glorification of Brute-Force Suffering)
LABORER_MENTALITY_PATTERNS = [
    r"(?i)(动脑子有什么用|搞理论都是骗子|写代码不如搬砖|算法都是忽悠|学数学有什么用)",
    r"(?i)(吃苦才是真理|不加班就是不努力|靠双手出汗才是硬道理|搞自动化的都是投机取巧)",
    r"(?i)(哪有那么多系统架构|一把梭就完了|想那么多干什么直接硬干)",
]

# High-Signal Empirical & Methodological Markers
HIGH_SIGNAL_MARKERS = [
    r"(?i)(实验数据|实证|控制变量|第一性原理|基准测试|benchmark|量化分析|复杂度|收敛)",
    r"(?i)(系统工程|拓扑|运筹学|吞吐量|时延|边际成本|帕累托|香农熵|信噪比|因果推断)",
    r"(?i)(ab\s*test|p-value|trade-off|scalability|reproducibility|empirical)",
]


@dataclass
class ExtractionCard:
    status: str  # "ACCEPTED" or "REJECTED"
    rejection_stage: Optional[str] = None
    rejection_reason: Optional[str] = None
    raw_snippet: str = ""
    snr_score: float = 0.0
    empirical_density: float = 0.0
    emotional_density: float = 0.0
    target_fallacy: Optional[str] = None
    extracted_claim: Optional[str] = None
    suggested_domain: Optional[str] = None
    scientific_deconstruction_angle: Optional[str] = None


class ContentFilter:
    def __init__(self) -> None:
        self.ideology_re = [re.compile(p) for p in IDEOLOGICAL_PATTERNS]
        self.venting_re = [re.compile(p) for p in VENTING_PATTERNS]
        self.laborer_re = [re.compile(p) for p in LABORER_MENTALITY_PATTERNS]
        self.high_signal_re = [re.compile(p) for p in HIGH_SIGNAL_MARKERS]

    def check_l1_hard_cut(self, text: str) -> Tuple[bool, Optional[str], Optional[str]]:
        """
        L1 Fast-path Hard-cut:
        Returns (is_rejected, stage_name, reason).
        """
        for pattern in self.ideology_re:
            match = pattern.search(text)
            if match:
                return True, "L1_HARD_CUT", f"Ideological/Factional noise detected: '{match.group(0)}'"

        for pattern in self.venting_re:
            match = pattern.search(text)
            if match:
                return True, "L1_HARD_CUT", f"Pure emotional venting detected: '{match.group(0)}'"

        return False, None, None

    def check_laborer_fallacy(self, text: str) -> Tuple[bool, Optional[str]]:
        """Detects anti-intellectual laborer mentality claims."""
        for pattern in self.laborer_re:
            match = pattern.search(text)
            if match:
                return True, f"Anti-intellectual brute-force labor fetishism detected: '{match.group(0)}'"
        return False, None

    def evaluate_metrics(self, text: str) -> Tuple[float, float, float]:
        """
        Calculates (snr_score, empirical_density, emotional_density).
        Normalized between 0.0 and 1.0.
        """
        text_len = max(len(text), 1)

        # Count high-signal terms
        high_signal_hits = sum(len(p.findall(text)) for p in self.high_signal_re)
        # Numbers, units, percentages
        data_markers = len(re.findall(r"\b\d+(\.\d+)?(ms|s|%|MB|GB|KB|ops|QPS|tps|x)?\b", text))
        empirical_score = min(1.0, (high_signal_hits * 0.2 + data_markers * 0.08))

        # Count emotional punctuation and subjective superlatives
        exclamations = len(re.findall(r"[!！?？]", text))
        emotional_words = len(re.findall(r"(绝对|肯定|彻底|完蛋|永远|毫无疑问|搞笑|扯淡)", text))
        emotional_score = min(1.0, (exclamations * 0.1 + emotional_words * 0.15))

        # SNR calculation: balance empirical facts against emotional noise
        base_snr = max(0.0, (empirical_score * 0.7) - (emotional_score * 0.3) + 0.3)
        snr_score = round(min(1.0, base_snr), 2)

        return snr_score, round(empirical_score, 2), round(emotional_score, 2)

    def evaluate(self, text: str, claim_hint: Optional[str] = None) -> ExtractionCard:
        snippet = text[:200].replace("\n", " ").strip()

        # Step 1: L1 Fast-path Hard-cut
        is_rejected, stage, reason = self.check_l1_hard_cut(text)
        if is_rejected:
            return ExtractionCard(
                status="REJECTED",
                rejection_stage=stage,
                rejection_reason=reason,
                raw_snippet=snippet,
            )

        # Step 2: Metric computation
        snr, empirical, emotional = self.evaluate_metrics(text)

        # Step 3: L2 SNR Gate
        if emotional > 0.6 and empirical < 0.2:
            return ExtractionCard(
                status="REJECTED",
                rejection_stage="L2_SNR_GATE",
                rejection_reason="Excessive emotional rhetoric without verifiable empirical foundation",
                raw_snippet=snippet,
                snr_score=snr,
                empirical_density=empirical,
                emotional_density=emotional,
            )

        # Check for Laborer Mentality target
        has_laborer, laborer_reason = self.check_laborer_fallacy(text)

        # Target classification
        if has_laborer:
            target_fallacy = "Laborer Fallacy: Conflating mechanical energy expenditure with value creation"
            domain = "Operations Research & Production Economics"
            deconstruct = "Apply marginal utility and automation leverage: mechanical friction vs. systemic throughput."
        else:
            target_fallacy = "Cognitive heuristic bias / unverified heuristic extrapolation"
            domain = "Complex Systems & Empirical Verification"
            deconstruct = "Examine boundary constraints, reproducibility of data points, and control baseline."

        return ExtractionCard(
            status="ACCEPTED",
            raw_snippet=snippet,
            snr_score=snr,
            empirical_density=empirical,
            emotional_density=emotional,
            target_fallacy=target_fallacy,
            extracted_claim=claim_hint or snippet,
            suggested_domain=domain,
            scientific_deconstruction_angle=deconstruct,
        )


def run_tests() -> bool:
    """Built-in self-test suite."""
    f = ContentFilter()
    all_passed = True

    cases = [
        # 1. Ideological bickering -> Must be REJECTED at L1
        ("外网那些殖人和润人天天吹，真是笑死爹了！", "REJECTED", "L1_HARD_CUT"),
        ("你们这帮粉红就是无可救药，大棋党迟早完蛋！！！", "REJECTED", "L1_HARD_CUT"),
        # 2. Pure emotional venting -> Must be REJECTED at L1
        ("气死我了！！！什么垃圾东西全部都该死！？？？", "REJECTED", "L1_HARD_CUT"),
        # 3. Laborer mentality with empirical target -> Should accept or isolate fallacy
        (
            "写代码搞那么多算法架构都是忽悠，只有靠双手吃苦出汗加班才是真理。",
            "ACCEPTED",
            None,
        ),
        # 4. High-signal empirical engineering discourse -> Must be ACCEPTED
        (
            "在基准测试中，我们通过引入拓扑排序优化了任务调度，系统时延降低了 34%，QPS 提升至 12500 ops/s，充分证明了控制变量法的有效性。",
            "ACCEPTED",
            None,
        ),
    ]

    print("🧪 Running ContentFilter self-tests...")
    for idx, (sample, expected_status, expected_stage) in enumerate(cases, 1):
        card = f.evaluate(sample)
        status_ok = card.status == expected_status
        stage_ok = expected_stage is None or card.rejection_stage == expected_stage

        if status_ok and stage_ok:
            print(f"  ✅ Test {idx} Passed: [{card.status}] {card.raw_snippet[:40]}...")
        else:
            print(f"  ❌ Test {idx} Failed:")
            print(f"     Input: {sample}")
            print(f"     Expected: status={expected_status}, stage={expected_stage}")
            print(f"     Got: status={card.status}, stage={card.rejection_stage}")
            all_passed = False

    return all_passed


def main() -> None:
    parser = argparse.ArgumentParser(
        description="Filter and evaluate raw text content for Anti-Laborer-Skills pipeline."
    )
    parser.add_argument("--test", action="store_true", help="Run internal self-tests")
    parser.add_argument("--file", type=str, help="Path to input text file to evaluate")
    parser.add_argument("--text", type=str, help="Direct raw string to evaluate")
    parser.add_argument("--format", choices=["json", "card"], default="card", help="Output format")

    args = parser.parse_args()

    if args.test:
        success = run_tests()
        sys.exit(0 if success else 1)

    content = ""
    if args.file:
        with open(args.file, "r", encoding="utf-8") as f:
            content = f.read()
    elif args.text:
        content = args.text
    elif not sys.stdin.isatty():
        content = sys.stdin.read()
    else:
        parser.print_help()
        sys.exit(1)

    evaluator = ContentFilter()
    result = evaluator.evaluate(content)

    if args.format == "json":
        print(json.dumps(asdict(result), ensure_ascii=False, indent=2))
    else:
        print("\n" + "=" * 60)
        print(f"🔬 CONTENT EVALUATION CARD: [{result.status}]")
        print("=" * 60)
        if result.status == "REJECTED":
            print(f"❌ Rejection Stage : {result.rejection_stage}")
            print(f"❌ Reason          : {result.rejection_reason}")
            print(f"📄 Raw Snippet     : {result.raw_snippet}")
        else:
            print(f"✅ Status          : ACCEPTED (High Signal / Analyzable)")
            print(f"📊 SNR Score       : {result.snr_score}")
            print(f"📈 Empirical Index : {result.empirical_density}")
            print(f"📉 Emotional Index : {result.emotional_density}")
            print(f"🎯 Target Fallacy  : {result.target_fallacy}")
            print(f"💡 Extracted Claim : {result.extracted_claim}")
            print(f"🏛 Suggested Domain: {result.suggested_domain}")
            print(f"⚙️ Deconstruct Angle: {result.scientific_deconstruction_angle}")
        print("=" * 60 + "\n")


if __name__ == "__main__":
    main()
