#!/usr/bin/env python3
"""
Anti-Anthropoid Lifecycle Deconstruction Engine
Part of Anti-Laborer-Skills repository.

Provides deterministic analysis and scientific-flavored dialectical responses
against "age-stage determinism" and coercive lifecycle control.
"""

from __future__ import annotations
import argparse
import json
import re
import sys
from dataclasses import asdict, dataclass
from typing import Dict, List, Optional, Tuple

COERCIVE_AGE_PATTERNS = [
    r"(?i)(什么年龄做什么事|什么年纪干什么事|到了这个年纪|多大年纪了还)",
    r"(?i)(30岁前必须|三十岁前必须|35岁之前|该结婚了|该成家了|赶紧生孩子)",
    r"(?i)(一步落后步步落后|什么时候干什么事|别胡思乱想了在这个年龄)",
    r"(?i)(不务正业|折腾什么|安分点|都多大了还折腾)",
]


@dataclass
class DeconstructionReport:
    raw_statement: str
    detected_tropes: List[str]
    is_lifecycle_coercion: bool
    core_fallacy_name: str
    fallacy_definition: str
    scientific_domain: str
    deconstruction_angles: Dict[str, str]
    recommended_scientific_response: str


class LifecycleDeconstructor:
    def __init__(self) -> None:
        self.patterns = [re.compile(p) for p in COERCIVE_AGE_PATTERNS]

    def analyze(self, text: str) -> DeconstructionReport:
        detected = []
        for p in self.patterns:
            matches = p.findall(text)
            if matches:
                if isinstance(matches[0], tuple):
                    detected.extend([m for m in matches[0] if m])
                else:
                    detected.extend(matches)

        detected = list(set(detected))
        is_coercion = len(detected) > 0

        if not is_coercion:
            return DeconstructionReport(
                raw_statement=text[:200],
                detected_tropes=[],
                is_lifecycle_coercion=False,
                core_fallacy_name="None",
                fallacy_definition="Statement does not exhibit age-stage coercive determinism signatures.",
                scientific_domain="N/A",
                deconstruction_angles={},
                recommended_scientific_response="No coercive lifecycle control pattern detected.",
            )

        # Classify the core fallacy
        fallacy_name = "同步流水线谬误与灵长类生物还原论 (Synchronous Pipelining & Primate Reductionism)"
        fallacy_def = (
            "以“什么年龄做什么事”为借口，将多维、异步、自适应的高阶人类生命系统，"
            "粗暴降维压缩至一维刚性时钟序列。本质是通过制造人为时间焦虑实现低成本代际权力控制。"
        )

        angles = {
            "复杂系统与运筹优化": (
                "从运筹学跨期动态规划（Intertemporal Dynamic Programming）来看，非平稳高阶系统（如人类认知与事业发展）"
                "的最优解必然具有高度异步性（Asynchrony）。强推单一线性的“到点同步（Lock-step）”，"
                "会直接引发严重的系统性死重损失（Deadweight Loss）与资源配置错配。"
            ),
            "认知科学与神经生物学": (
                "神经科学与脑发育研究证实：人类大脑的额叶髓鞘化、晶体智力（Crystallized Intelligence）与复杂模式识别能力"
                "呈现终身动态演进特征。将智力创造与决策能力绑定在早期的狭窄生物学时间窗，"
                "是典型的农业前现代灵长类行为学刻舟求剑。"
            ),
            "信息论与控制论": (
                "在控制论视角下，“什么年龄做什么事”是一种粗暴的“抑制系统方差以降低观察与控制成本”的驯化模因。"
                "它服务于施控者的管理便利，而非被控系统的自适应鲁棒性与高阶价值创造。"
            ),
        }

        # Compose a dignified, non-contrarian, scientific-flavored dialectical response
        scientific_response = (
            "生命历程作为高阶自适应非线性系统，其核心演进机制是基于外部环境反馈与个体认知禀赋的异步动态规划（Asynchronous Dynamic Planning），"
            "而非工业化时代流水线式的刚性同步时钟（Rigid Synchronous Clock）。"
            "所谓“什么年龄做什么事”，本质上是前现代灵长类面对高死亡率与单调生存环境时形成的粗糙启发式经验，"
            "若将其作为普适法则对复杂知识工作者施加刚性约束，在运筹学上将直接导致严重的局部最优陷阱与认知潜能的系统性浪费。"
            "健康的发展范式应当是认知、技能与决策的事件驱动型（Event-Driven）持续演化，而非对生物学年龄标签的机械臣服。"
        )

        return DeconstructionReport(
            raw_statement=text[:200].replace("\n", " ").strip(),
            detected_tropes=detected,
            is_lifecycle_coercion=True,
            core_fallacy_name=fallacy_name,
            fallacy_definition=fallacy_def,
            scientific_domain="复杂系统运筹学、认知神经学、信息控制论",
            deconstruction_angles=angles,
            recommended_scientific_response=scientific_response,
        )


def run_tests() -> bool:
    engine = LifecycleDeconstructor()
    samples = [
        "你都多大年纪了还整天折腾那些没用的代码？到了这个年纪就该结婚生子安分过日子！",
        "什么年龄就该做什么事，30岁前必须买房稳定下来，一步落后步步落后懂不懂？",
        "今天天气真不错，我们来复习一下微积分和线性代数吧。",
    ]

    print("🧪 Testing LifecycleDeconstructor...")
    r1 = engine.analyze(samples[0])
    assert r1.is_lifecycle_coercion, "Sample 1 should trigger coercion detection"
    print("  ✅ Test 1 Passed: Correctly flagged age coercion tropes:", r1.detected_tropes)

    r2 = engine.analyze(samples[1])
    assert r2.is_lifecycle_coercion, "Sample 2 should trigger coercion detection"
    print("  ✅ Test 2 Passed: Correctly identified synchronous pipeline fallacy")

    r3 = engine.analyze(samples[2])
    assert not r3.is_lifecycle_coercion, "Sample 3 should be clean"
    print("  ✅ Test 3 Passed: Correctly identified neutral statement")

    return True


def main() -> None:
    parser = argparse.ArgumentParser(description="Deconstruct 'Age-Stage Determinism' and coercive lifecycle rhetoric.")
    parser.add_argument("--text", type=str, help="Statement to analyze")
    parser.add_argument("--test", action="store_true", help="Run self-tests")
    parser.add_argument("--json", action="store_true", help="Output JSON format")

    args = parser.parse_args()

    if args.test:
        run_tests()
        sys.exit(0)

    statement = args.text
    if not statement and not sys.stdin.isatty():
        statement = sys.stdin.read()

    if not statement:
        parser.print_help()
        sys.exit(1)

    engine = LifecycleDeconstructor()
    report = engine.analyze(statement)

    if args.json:
        print(json.dumps(asdict(report), ensure_ascii=False, indent=2))
    else:
        print("\n" + "=" * 65)
        print("🧬 [ANTI-ANTHROPOID-LIFECYCLE] 科学风味认知解构报告")
        print("=" * 65)
        print(f"📄 原始言论: {report.raw_statement}")
        print(f"🚨 触发特征: {', '.join(report.detected_tropes) if report.detected_tropes else '未检出'}")
        print(f"⚖️ 判定结果: {'【确定存在生命周期控制】' if report.is_lifecycle_coercion else '【未检出明显控制特征】'}")
        if report.is_lifecycle_coercion:
            print(f"🎯 核心谬误: {report.core_fallacy_name}")
            print(f"📖 谬误定义: {report.fallacy_definition}")
            print(f"🏛 解构学科: {report.scientific_domain}\n")
            print("🔬 维分解构视角:")
            for angle, detail in report.deconstruction_angles.items():
                print(f"  • 【{angle}】:\n    {detail}")
            print(f"\n💡 建议科学风味回应策略:\n{report.recommended_scientific_response}")
        print("=" * 65 + "\n")


if __name__ == "__main__":
    main()
