---
name: phantom-authority-evaluator
description: Ingest and evaluate input text exhibiting "Appeal to Phantom Authority" (请大佛讲大道理). Identify authority totems, extract shielded engineering or institutional defects, map real-world root causes, compute Thought-Termination Index (TTI), and emit structured PhantomAuthorityCard data without generating counter-arguments.
---

# Phantom Authority Evaluator (Appeal to Phantom Authority Evaluation Skill)

[English Version](./SKILL.en.md) | [中文版本](./SKILL.md)

---

This skill is designed specifically to analyze and evaluate the cognitive fallacy known as **"Appeal to Phantom Authority" (The Great Buddha Fallacy / 请大佛讲大道理)**—an epistemic defense mechanism that appeals to non-existent, deified, or abstract omniscient authorities to forcibly rationalize product defects, institutional obsolescence, or substandard solutions as "necessarily optimal."

> [!IMPORTANT]
> ### Architectural Boundary: Strict Decoupling Between Input Evaluation and Output Generation
> This skill operates strictly as an **input-side structured parsing engine**.
> - **Mandatory Scope**: Pattern scanning, totem identification, defect decoupling, organizational root cause mapping, Thought-Termination Index (TTI) computation, and emitting standardized `PhantomAuthorityCard` objects.
> - **Strict Prohibition**: **Never generate counter-arguments, rhetorical rebuttals, conversational scripts, or response dialogues**. Rhetorical response generation must be handled independently by specialized output skills (such as `anti-laborer-output`).

---

## Core Evaluation Workflow

Follow these five consecutive stages when evaluating input text. Each stage must satisfy its designated **Completion Criterion**:

### Stage 1: Surface Regex & Lexical Scan
1. Ingest raw text or discussion snippet.
2. Execute the bundled lightweight scanner tool:
   ```bash
   python3 skills/phantom-authority-evaluator/scripts/parse_phantom.py --text "<raw text>"
   ```
3. Inspect `has_phantom_authority` and the matched archetype:
   - `industrial_omniscience` (Myth of infallible corporate engineering)
   - `historical_heritage` (Sacralization of historical ancestors/tradition)
   - `institutional_omniscience` (Myth of omniscient bureaucratic leadership)
- **Completion Criterion**: Obtained archetype classification and initial `thought_termination_index` baseline.

### Stage 2: Dual-Entity Extraction
Disentangle and isolate two key entities from the input:
1. **Phantom Totem (`phantom_totem`)**: The unverified, abstract omniscient entity invoked (e.g., "Tens of thousands of top engineers at a trillion-dollar company," "Imperial physicians across 5,000 years of history," "The omniscient central policy think-tank").
2. **Shielded Defect (`shielded_defect`)**: The concrete engineering compromise, obsolete process, or poor user experience being shielded from scrutiny (e.g., "Flickering PWM display / thermal throttling," "Traditional herbal remedy lacking toxicology screening," "Redundant multi-stage approval bureaucracy").
- **Completion Criterion**: Successfully separated the rhetorical aura from the underlying physical/engineering defect.

### Stage 3: Root Cause Disentanglement & Knowledge Mapping
Map the shielded defect to its real-world physical, economic, or organizational driver in accordance with [RUBRIC.en.md](./RUBRIC.en.md) and OKF knowledge entries ([appeal-to-phantom-authority](../../knowledge/cognitive-bias/appeal-to-phantom-authority.en.md) and [system-justification-panglossian](../../knowledge/cognitive-bias/system-justification-panglossian.en.md)):
- `cost_bom_compromise`: BOM budget constraints, gross margin targets, or production yield tradeoffs;
- `organizational_silo`: Departmental KPI silos, internal political fragmentation, and bureaucratic liability minimization;
- `path_dependency_legacy`: Unamortized tooling/production equipment, downward compatibility baggage;
- `historical_epistemic_gap`: Blind spots of pre-scientific eras lacking statistical tools or biochemical assay methods;
- `principal_agent_distortion`: Principal-agent information loss and defensive procedural compliance over global efficiency.
- **Completion Criterion**: Defect assigned an objective engineering/organizational driver devoid of deification assumptions.

### Stage 4: TTI & Epistemic Scoring
1. Score the Thought-Termination Index (TTI, 0.0 - 1.0) using [RUBRIC.en.md](./RUBRIC.en.md):
   - If the statement relies 100% on "How could giant company X / historical ancestors not have thought of that?" without empirical data, set `TTI >= 0.7`.
   - If partial technical terms are mentioned but the core conclusion still relies on the totem, set `0.4 <= TTI < 0.7`.
   - If concrete engineer names, patent filings, or double-blind clinical trials are cited, set `TTI < 0.3` (valid technical discussion, not phantom authority).
2. SNR Verdict:
   - Statements with `TTI >= 0.7` are flagged as `FLAG_PHANTOM_AUTHORITY_LOW_SNR`. Archive as cognitive bias samples; reject from empirical knowledge ingestion.
- **Completion Criterion**: Quantified TTI score and SNR classification determined.

### Stage 5: Emit PhantomAuthorityCard
Package evaluation metrics into a standardized JSON data structure. Do NOT append conversational prose:

```json
{
  "card_type": "PhantomAuthorityCard",
  "version": "1.0",
  "archetype": "industrial_omniscience | historical_heritage | institutional_omniscience",
  "phantom_totem": "Description of the abstract omniscient entity invoked",
  "shielded_defect": "The concrete flaw or suboptimal compromise shielded",
  "mapped_root_cause": "cost_bom_compromise | organizational_silo | path_dependency_legacy | historical_epistemic_gap | principal_agent_distortion",
  "root_cause_explanation": "Objective engineering, economic, or organizational explanation",
  "thought_termination_index": 0.85,
  "snr_verdict": "FLAG_PHANTOM_AUTHORITY_LOW_SNR",
  "knowledge_refs": [
    "knowledge/cognitive-bias/appeal-to-phantom-authority.en.md",
    "knowledge/cognitive-bias/system-justification-panglossian.en.md"
  ]
}
```
- **Completion Criterion**: Strictly valid JSON object emitted matching the schema.

---

## References and Associated Artifacts

- [Evaluation Rubric (RUBRIC.en.md)](./RUBRIC.en.md): Complete archetype matrices and root-cause taxonomies.
- [Parsing Script (scripts/parse_phantom.py)](./scripts/parse_phantom.py): Ready-to-use CLI token and pattern extraction script.
- [Knowledge: Appeal to Phantom Authority](../../knowledge/cognitive-bias/appeal-to-phantom-authority.en.md): Cognitive closure and authority mutations.
- [Knowledge: Panglossian Paradigm & System Justification](../../knowledge/cognitive-bias/system-justification-panglossian.en.md): Satisficing and organizational friction theory.
