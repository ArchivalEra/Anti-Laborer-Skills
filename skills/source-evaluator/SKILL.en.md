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
- **Completion Criterion**: Produce a complete, schema-compliant JSON or Markdown ExtractionCard.

---

## Auxiliary Resources & Specifications

- [Evaluation Rubric & Fallacy Taxonomy (RUBRIC.en.md)](./RUBRIC.en.md): Detailed 4-dimensional laborer fallacy classification and quantitative thresholds.
- [Automated Filter Utility (scripts/filter.py)](./scripts/filter.py): Dependency-free CLI utility for fast regex screening and card generation.
