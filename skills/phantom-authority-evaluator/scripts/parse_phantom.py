#!/usr/bin/env python3
"""
Lightweight parser script to detect and extract "Appeal to Phantom Authority"
(The Great Buddha Fallacy / 请大佛讲大道理) markers from raw text.
"""

import sys
import re
import json
import argparse

PATTERNS = {
    "industrial_omniscience": [
        r"(?:大厂|大公司|巨头|苹果|华为|微软|谷歌|腾讯|阿里|大企业|厂家|团队).*?(?:怎么可能?没想到|怎么会不知道|吃白饭的|不如你懂|养那么多人)",
        r"(?:那么多|成千上万|成百上千).*?(?:工程师|顶尖人才|专家).*?(?:没想到|不知道|不如你|比你傻)",
        r"(?:人家|他们).*?(?:几十|上百|成千|上万).*?(?:万亿|工程师|精英).*?(?:难道|怎么会|怎么可能)",
        r"how could (?:apple|google|huawei|a giant company|such a big firm|engineers) not have thought of",
        r"do you think (?:their engineers|a billion-dollar company) (?:are stupid|know less than you)"
    ],
    "historical_heritage": [
        r"(?:上下五千年|老祖宗|几千年|古人|中医世家|御医|代代相传).*?(?:怎么可能?没发现|难道都是傻子|几千年白活了|难道不如你|吃了多少年)",
        r"(?:几百年|上千年|千百年).*?(?:传承|积累|智慧).*?(?:有假|骗人|错的)",
        r"(?:5000|thousands of) years.*?(?:ancestors|doctors|generations).*?(?:not know|foolish|wrong)"
    ],
    "institutional_omniscience": [
        r"(?:上面|大领导|国家|智囊团|体制|权威机构).*?(?:怎么可能看不出|难道不如你聪明|比你傻|深谋远虑|必然有大棋|必然有深意)",
        r"(?:elite think-tanks|leadership|the state|the system).*?(?:be dumber than you|not have realized)"
    ]
}

def analyze_text(text: str) -> dict:
    detected_archetypes = []
    matched_phrases = []

    for archetype, pattern_list in PATTERNS.items():
        for p in pattern_list:
            matches = re.findall(p, text, re.IGNORECASE)
            if matches:
                detected_archetypes.append(archetype)
                matched_phrases.extend(matches)

    detected_archetypes = sorted(list(set(detected_archetypes)))
    has_phantom = len(detected_archetypes) > 0

    tti_score = 0.0
    if has_phantom:
        # Base score on length and presence of dismissive markers
        dismissive_markers = ["怎么可能", "不如你", "吃白饭", "白活", "比你傻", "not have thought"]
        count = sum(1 for m in dismissive_markers if m in text.lower())
        tti_score = min(1.0, 0.6 + count * 0.1)

    return {
        "has_phantom_authority": has_phantom,
        "archetypes": detected_archetypes,
        "thought_termination_index": round(tti_score, 2),
        "snr_verdict": "FLAG_PHANTOM_AUTHORITY_LOW_SNR" if tti_score >= 0.7 else "CLEAN_OR_MARGINAL"
    }

def main():
    parser = argparse.ArgumentParser(description="Parse Appeal to Phantom Authority patterns.")
    parser.add_argument("--text", type=str, help="Text to analyze")
    args = parser.parse_args()

    input_text = args.text
    if not input_text and not sys.stdin.isatty():
        input_text = sys.stdin.read()

    if not input_text:
        parser.print_help()
        sys.exit(1)

    result = analyze_text(input_text)
    print(json.dumps(result, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
