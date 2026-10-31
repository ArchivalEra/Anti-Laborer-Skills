# Content Evaluation & SNR Rubric

[English Version](./RUBRIC.en.md) | [中文版本](./RUBRIC.md)

---

This document provides progressively disclosed reference standards for the `source-evaluator` skill, detailing the 3-tier sieve architecture, fallacy taxonomies, and high-SNR empirical benchmarks.

> [!IMPORTANT]
> ### Scope Restriction (a precondition on every criterion in this rubric)
> The object of judgement is **utterance text**, not **human beings**. Every criterion must be decidable from the text alone (or from the text's time series).
> - Inferring a speaker's identity, occupation, social class, or psychological state is **prohibited**; a proposition so derived is unfalsifiable, hence uncorrectable.
> - **Never** use "pinning a laborer / idle-cynic label on someone" as a basis for judgement or handling—that act is structurally identical to the zero-information disqualification intercepted in §2.4.
> - Producer profiles (e.g. "unproductive idle cynics", "attention-deficit cohorts") are **unfalsifiable, unproven hypotheses**; they constitute no criterion and must not be written into a handling protocol.
> - The stated rationale of a handling protocol must land on the utterance: "this utterance carries no actionable proposition, so it warrants no compute", not "this person belongs to category X, so they don't merit a reply."

---

## 1. The 3-Tier Sieve Architecture

```
[Raw Ingestion Stream / Search Harvest]
        │
        ▼
[L1 Fast-path Hard-Cut] ──(Factional / Ideological / Venting)──► [Immediate Discard / Zero Infer Cost]
        │ (Passed)
        ▼
[L2 SNR Gate] ──(Subjective Noise / Zero Fact Foundation)──► [Rejected]
        │ (Passed)
        ▼
[L3 Empirical Audit & Extraction] ──► [Structured ExtractionCard]
```

---

## 2. L1 Fast-Path Hard-Cut Criteria (Single-Strike Discard)

Any candidate content exhibiting any of the following traits is **immediately dropped without counter-argument (REJECT_L1)**:

1. **Factional Labeling & Ideological Tribalism**:
   - Explicit partisan faction tags or hostile political slang (e.g. factional name-calling, political mudslinging).
   - Attempting to drag technical, engineering, or scientific questions into ideological stance-taking.
2. **Pure Emotional Venting & Personal Attacks**:
   - Profanity-laden rhetoric, insults, curses, or nihilistic outbursts.
   - Pervasive abusive punctuation (e.g. repeated `!!!` or `???`).
3. **Bad-Faith Agitprop & Conspiracy Narratives**:
   - Conspiratorial accusations of motives lacking empirical anchoring ("must be paid shills", "puppeted by hidden forces").
4. **Zero-Information Disqualification (carrier-independent)**:
   - **Conjunction** of all three: (i) shielding shell—carries a demotion escape hatch, realized by a code (`😂`/`🤣`/`[捂脸]`/`🤦`) or a plain-text formula ("one can only say…", "go read a book", "you aren't familiar with X"); (ii) unilateral competence verdict—the claim lands on "you don't understand / aren't familiar / lack standing", not on the truth of the issue; (iii) zero evidentiary chain—no named mechanism, figure, or reproducible fact.
   - **The carrier is a variable; the mechanism is the invariant**: absence of emoji is no exemption, and presence of emoji alone is not sufficient. Flag as `FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` (code carrier) or `FLAG_ZERO_INFORMATION_DISQUALIFICATION` (plain-text carrier).
   - Mechanism-naming long comments and amicable mechanism discussion do **not** hit this item.

---

## 3. Laborer Mentality Taxonomy

"Laborer Mentality" refers to an anti-intellectual tendency in knowledge work and engineering that substitutes mechanical energy expenditure for architectural design and uses cognitive inertia to deny intellectual leverage:

| Fallacy Type | Core Assertion | Scientific Deconstruction Anchor |
| :--- | :--- | :--- |
| **Means-Ends Inversion** | Fetishizing physical exhaustion and hours worked; equating suffering with value output. | Law of Diminishing Marginal Utility; Energy-Yield Ratio. |
| **Anti-Abstraction Bias** | Dismissing algorithms, architecture, math, and theoretical models as "fake hustle", claiming only manual labor is real. | Computational Complexity (\(O(n)\) vs \(O(n^2)\)); System Topology; Abstraction Layer Isolation. |
| **Automation Resistance** | Treating automation, scripting, and tooling improvements as "lazy shortcuts"; resisting toolchain evolution. | Operations Research Pareto Frontier; Division of Labor Economics. |
| **Nihilistic Empiricism** | Rejecting controlled variables and quantitative verification; weaponizing isolated survivorship-bias anecdotes against statistical laws. | Hypothesis Testing; Sampling Bias; Confidence Intervals. |

---

## 4. L3 Structured Extraction Specification (ExtractionCard)

Content surviving the evaluation is formatted into an **ExtractionCard**:

```json
{
  "status": "ACCEPTED",
  "flag": null,
  "snr_score": 0.85,
  "empirical_density": 0.72,
  "emotional_density": 0.05,
  "target_fallacy": "Means-Ends Inversion: Equating mechanical hours expended with systemic value delivery",
  "extracted_claim": "Longer overtime directly correlates with engineering quality; standard processes waste time",
  "suggested_domain": "Software Engineering Metrics & Operations Research",
  "scientific_deconstruction_angle": "Introduce Defect Escape Rate and cognitive fatigue degradation curves to demonstrate that exhaustion positively correlates with system entropy."
}
```
