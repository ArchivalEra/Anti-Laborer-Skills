---
name: source-evaluator
description: Evaluate and filter raw text, discussion threads, or search results to extract high-signal materials for anti-laborer skills. Trigger when evaluating source material, assessing signal-to-noise ratio, filtering ideological or emotional noise, or extracting anti-intellectual fallacies.
---

# Source Evaluator (Content Discrimination & High-SNR Extraction Skill)

[English Version](./SKILL.en.md) | [中文版本](./SKILL.md)

---

This skill executes a rigorous **Multi-Stage Sieve** across diverse search harvests and raw inputs, purging ideological mudslinging, personal insults, and unsubstantiated noise to distill high-signal empirical discourse and distinct anti-intellectual/laborer targets.

> [!IMPORTANT]
> ### Core Axiom: Reject Antagonistic Contrarianism, Champion Technical Rationality
> When evaluating or deconstructing content, strictly avoid an adversarial posture of "playing devil's advocate for the sake of opposing". Across all discourse, treat **information theory, cybernetics, operations research, and first principles** as the sole arbiters.

> [!IMPORTANT]
> ### Scope Axiom: Utterances, Not Humans
> The object of analysis in this skill and in the knowledge base behind it is **utterance text**, not **human beings**. Every criterion must be decidable from the text alone (or from the text's time series), and must **never** depend on inferences about a speaker's identity, occupation, social class, or psychological state.
> - A proposition reverse-engineered from text to speaker is **unfalsifiable, hence uncorrectable**—that is dead knowledge, not knowledge.
> - Pinning a "laborer" or "idle cynic" label on a person is **structurally identical** to the zero-information disqualification described below: it substitutes a cheap classification of a person for expensive analysis of a mechanism. That is itself laborer behaviour (laziness), and this skill forbids operating that way.
> - Any assertion involving a producer profile must be marked as an **unfalsifiable, unproven hypothesis**, and must never enter a detection rule or a handling protocol.
> - The stated rationale of any handling protocol must land on the utterance: write "**this utterance carries no actionable proposition, so it warrants no compute**", not "this person belongs to category X, so they don't merit a reply." The latter is unfalsifiable and misfires in both directions—a mechanism-rich long comment would be waved through, while a carrier variant would be misjudged.
> - Only two things are testable: the structure of the text itself, and the text's time series.

---

## The Sieve Workflow

Execute the following four sequential phases. Each phase concludes on an unambiguous, testable **Completion Criterion**:

### Phase 1: Ingestion & In-Situ Pre-filtering
1. Ingest candidate text snippets, discussion threads, or search harvest streams.
2. Execute the local lightweight filter script for immediate signature screening:
   ```bash
   python3 skills/source-evaluator/scripts/filter.py --text "<candidate_text>"
   ```
- **Completion Criterion**: Candidate text is cleansed and evaluated for baseline SNR telemetry.

### Phase 2: L1 Fast-Path Hard-Cut
1. Scan for the following **veto conditions**:
   - Partisan tribalism, ideological mudslinging, or hostile faction labels;
   - Dense personal insults, vulgar profanity, or pure nihilistic venting;
   - Pure posturing devoid of real engineering or factual subject matter.
   - **Zero-information disqualification**: shielding shell (a code or plain-text demotion escape hatch) + unilateral competence verdict + zero evidentiary chain, all three conjoined. Carrier unconstrained; absence of emoji is no exemption (flagged `FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` / `FLAG_ZERO_INFORMATION_DISQUALIFICATION`).
2. If any condition triggers: **immediately drop and designate as `REJECT_L1_HARD_CUT`. Cease further reasoning to conserve cognitive and computational bandwidth**.
- **Completion Criterion**: All ideological noise and pure emotional hostility are eliminated at L1 without leaking downstream.

### Phase 3: L2 SNR & Structural Gate
1. Consult the [Evaluation Rubric (RUBRIC.en.md)](./RUBRIC.en.md) to inspect argumentative structure:
   - Does the text posit verifiable factual claims or quantitative indicators?
   - Does it exhibit "laborer mentality" markers (e.g. fetishizing pointlessly grueling mechanical expenditure over systemic leverage)?
   - Does emotional posturing drown out substantive content?
2. If the text lacks factual anchors and consists solely of subjective assertions, designate as `REJECT_L2_SNR_GATE` and discard.
- **Completion Criterion**: The filtered cohort contains solely empirical content or distinct, analyzable laborer mentality fallacies.

### Phase 4: L3 ExtractionCard Formulation
1. For validated materials, generate a structured **ExtractionCard**:
   - **Target Fallacy**: Pinpoint the precise laborer fallacy (e.g. Means-Ends Inversion, Anti-Abstraction Bias);
   - **Extracted Claim**: Isolate the core substantive assertion;
   - **Scientific Domain**: Map to the relevant scientific or engineering discipline (e.g. Systems Engineering, Operations Research, Information Entropy);
   - **Deconstruction Angle**: Formulate an objective, rational, first-principles critique anchor.
   - **Criterion anchoring**: Target Fallacy must describe the **utterance**, never the speaker. Producer profiles (identity, class, occupation, psychology) must never be written into the card.
- **Completion Criterion**: Produce a complete, schema-compliant JSON or Markdown ExtractionCard.

---

## Auxiliary Resources & Specifications

- [Evaluation Rubric & Fallacy Taxonomy (RUBRIC.en.md)](./RUBRIC.en.md): Detailed 4-dimensional laborer fallacy classification and quantitative thresholds.
- [Automated Filter Utility (scripts/filter.py)](./scripts/filter.py): Dependency-free CLI utility for fast regex screening and card generation.
