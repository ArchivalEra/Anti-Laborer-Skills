# Anti-Laborer-Skills

[English Version](./README.en.md) | [中文版本](./README.md)

---

## 📌 Project Vision & Positioning

**Anti-Laborer-Skills** is a systematic repository of **anti-laborer rhetoric generation skills** engineered for AI Agents and knowledge practitioners.

The primary objective of this project is to deconstruct and address various forms of **anti-intellectualism, meaningless cognitive friction, and the blind glorification of brute-force, inefficient mechanical labor ("laborer mentality")** through **high information density, rigorous logic, and a distinct scientific rigor (Scientific-flavored methodology)**.

> [!IMPORTANT]
> ### Core Rhetorical Principle: Reject Antagonistic Contrarianism, Champion Technical Rationality
> All content and generated skills within this repository **must strictly avoid an antagonistic, rebellious tone of "being here merely to play devil's advocate"**.
> When confronting irrational or anti-intellectual currents, our foundation is neither emotional venting nor trivial online disputes. Instead, we ground our dialectic in **first principles, cybernetics, complex systems theory, operations research, and cognitive science**. By maintaining a calm, objective, well-structured, and empirically grounded scientific discourse, we cut through intellectual fog and provide constructive, high-dimensional resolutions.

---

## 🎯 Primary Objectives

1. **Identify and Deconstruct "Laborer Mentality"**:
   - Dissect fallacies centered on "glorifying self-indulgent mechanical exhaustion", "dismissing architectural leverage and intellect", and "mistaking means for ends".
2. **Generate Scientific-Flavored Dialectic Rhetoric**:
   - Infuse systems engineering principles, operations research optimization models, thermodynamic entropy laws, and cognitive bias frameworks into natural language generation to dissolve irrational assertions with irrefutable logic.
3. **Establish Standardized Agent Skills**:
   - Provide turnkey, modular skills for modern Large Language Models and autonomous agents (ZCode Agent, Claude, GPT, etc.), enabling them to preserve professional composure and high-signal output across polarized environments.

---

## 🛠 Repository Engineering Standards & Defenses

To maintain structural integrity and relentless consistency, this repository implements strict automated pre-commit verification mechanisms:

### 1. Strict Bilingual Mandate
- Every Markdown document must exist in symmetric pairs: any `filename.md` must be accompanied by a co-located `filename.en.md`.
- A local `pre-commit` Git hook enforces bidirectional verification across the staging index.

### 2. Absolute-Path Whitelist (.gitignore)
- The repository enforces a total ignore-by-default policy, strictly prohibiting broad wildcards (e.g., `*.md`, `!foo/*`).
- Any asset committed to version control must be explicitly whitelisted using its absolute path anchored to the repository root (e.g., `!/skills/example/SKILL.md`).

### 3. Synchronous Skills-README Update Hook
- Whenever skills within the `skills/` directory are modified, the pre-commit hook mandates that both `README.md` and `README.en.md` must be updated and staged concurrently, preventing stale indexes and out-of-date documentation.

## 🏛 Architectural Decoupling: Knowledge Base vs. Action Skills

The repository enforces an absolute architectural separation between **Information Sourcing & Knowledge Synthesis** and **Response & Dialogue Generation**:

```
+-------------------------------------------------------------------------+
|                  1. Knowledge Layer (knowledge/)                        |
|       Standardized under Google Open Knowledge Format (OKF v0.2)        |
|                                                                         |
|  - Peer-reviewed empirical facts, formal ontologies, cybernetic proofs   |
|  - Strictly prohibits dialogue templates, prompts, or contrarian tone  |
|  - Location: knowledge/<domain>/<concept>.en.md                         |
+-------------------------------------------------------------------------+
                                    |
                    Mounted as Read-Only Ground Truth Context
                                    v
+-------------------------------------------------------------------------+
|                  2. Skill & Action Layer (skills/)                      |
|       Standard Agent Skills (ZCode, Claude Code, AGY Formats)           |
|                                                                         |
|  - Harvester engine (scripts/harvester): multi-platform scrapers        |
|  - Content sieve (skills/source-evaluator): 3-tier noise filtering      |
|  - Reasoning & response skills (future): consume knowledge context      |
+-------------------------------------------------------------------------+
```

---

## 📚 Knowledge Catalog Index (Open Knowledge Format v0.2)

Refer to the master knowledge index at [`knowledge/index.en.md`](./knowledge/index.en.md).

| Domain ID | Domain Name | Key Registered Concepts | Status | Directory |
| :--- | :--- | :--- | :--- | :--- |
| **`anthropoid-lifecycle`** | Anthropoid Lifecycle Control & Age-Stage Determinism | • Formal Ontological Definition & Boundary<br>• Neugarten Social Clock & 35-Year Barrier Phenomenology<br>• Ashby's Law of Requisite Variety & Pipeline Deadlocks<br>• Asynchronous Event-Driven State Machines & Neurogenesis<br>• Real Options Value & Premature Lock-in Economics<br>• Spence Signaling vs Deliberate Practice Mastery<br>• Panopticon & Learned Helplessness Internalization<br>• Non-Linear High-Achievement Empirical Case Library | `active` | [`knowledge/anthropoid-lifecycle/`](./knowledge/anthropoid-lifecycle/index.en.md) |
| **`labor-system`** | Labor System Design & Institutional Age Gates | • Systemic Analysis of PRC Labor Market Age Gates<br>• Global Age Discrimination Law Comparative Study (ADEA/EU) | `active` | [`knowledge/labor-system/`](./knowledge/labor-system/index.en.md) |
| **`cognitive-bias`** | Cognitive Biases & Persuasion Mechanics | • Availability Heuristic & Peer Anxiety Amplification<br>• Status Quo Bias, Loss Aversion & Social Proof Cascades<br>• Hyperbolic Discounting & Enforced Myopia<br>• Appeal to Phantom Authority ("The Great Buddha Fallacy")<br>• Panglossian Paradigm & System Justification Theory | `active` | [`knowledge/cognitive-bias/`](./knowledge/cognitive-bias/index.en.md) |
| **`innovation-economics`** | Innovation Economics & Diversity Portfolio | • Exploration-Exploitation Trade-off & Multi-Armed Bandit Failure<br>• Antifragility & Non-Linear Career Barbell Strategy | `active` | [`knowledge/innovation-economics/`](./knowledge/innovation-economics/index.en.md) |
| **`comparative-global-models`** | Global Comparative Lifecourse Models | • Japan's Shukatsu Pipeline & Lost Generation Scars<br>• Nordic Flexicurity Golden Triangle & Lifelong Education<br>• US Returnship Institutional Re-entry Ecosystems | `active` | [`knowledge/comparative-global-models/`](./knowledge/comparative-global-models/index.en.md) |

---

## 📂 Skills Index

| Skill Name | Description | Chinese Spec | English Spec | Status |
| :--- | :--- | :--- | :--- | :--- |
| **`source-evaluator`** | Content evaluation & multi-tier sieve skill: 3-tier Sieve architecture purging political bickering & emotional noise to extract high-SNR empirical raw material and laborer fallacy cards. | [SKILL.md](./skills/source-evaluator/SKILL.md) | [SKILL.en.md](./skills/source-evaluator/SKILL.en.md) | ✅ Ready |
| **`phantom-authority-evaluator`** | Appeal to Phantom Authority evaluation skill (Input analyzer for "The Great Buddha Fallacy"): Pure input parsing engine isolating abstract authority totems from shielded engineering/organizational defects, mapping physical root causes, scoring Thought-Termination Index (TTI), with zero output-generation overlap. | [SKILL.md](./skills/phantom-authority-evaluator/SKILL.md) | [SKILL.en.md](./skills/phantom-authority-evaluator/SKILL.en.md) | ✅ Ready |
| **`anti-laborer-output`** | Discourse generation & deconstruction skill (AI agent operational runbook): Front-loads Matt-style Step 0 Grill-Me to settle the decision frontier; mounts OKF v0.2 knowledge base for evidence retrieval; executes a deterministic workflow with two-pass quality gates for calm, high-density, non-adversarial rational output. | [SKILL.md](./skills/anti-laborer-output/SKILL.md) | [SKILL.en.md](./skills/anti-laborer-output/SKILL.en.md) | ✅ Ready |


---

## 📜 Contribution Guidelines

We welcome contributors with rigorous scientific methodology and engineering discipline. Please observe the following requirements:
1. Maintain an objective, empirical, non-combative academic and engineering tone at all times;
2. Knowledge domains must adhere strictly to Google Open Knowledge Format (OKF v0.2) specifications;
3. Never mix response templates or emotional rhetoric into the knowledge catalog;
4. Provide symmetric bilingual versions for any new or modified documentation;
5. Adhere to the absolute-path whitelist convention when updating `.gitignore`.

