---
id: okf.knowledge.catalog_index
name: Anti-Laborer Knowledge Catalog Index
type: CatalogIndex
spec_version: "0.2"
last_updated: "2026-09-12"
stewards:
  - team: Anti-Laborer Architecture & Knowledge Engineering Team
domains:
  - id: anthropoid-lifecycle
    name: Anthropoid Lifecycle Control & Age-Stage Determinism
    path: knowledge/anthropoid-lifecycle/
    description: Systems engineering, cybernetics, and cognitive neuroscience knowledge catalog deconstructing age-stage determinism and coercive lifecycle homogenization.
  - id: labor-system
    name: Labor System Design & Institutional Age Gates
    path: knowledge/labor-system/
    description: Institutional economics, comparative labor law, and policy analysis of forced linear labor pipeline design and age-based institutional gatekeeping.
  - id: cognitive-bias
    name: Cognitive Biases & Persuasion Mechanics of Lifecycle Control
    path: knowledge/cognitive-bias/
    description: Behavioral economics and cognitive psychology analysis of why age-stage determinism discourse is cognitively persuasive — availability heuristic, loss aversion, and hyperbolic discounting.
---


# Knowledge Catalog Index (Open Knowledge Format v0.2)

This knowledge repository is constructed adhering to Google's **Open Knowledge Format (OKF v0.2)** specification. It establishes a structured, vendor-neutral, version-controlled knowledge base consumable by human domain specialists and autonomous AI agents alike.

## The Decoupling Principle

The foundational engineering principle of this repository is the **absolute architectural decoupling between Knowledge Ingestion & Synthesis and Action / Dialogue Generation**:

1. **`knowledge/` (Knowledge Layer)**:
   - Formatted strictly under OKF v0.2.
   - Stores objective, peer-reviewed, empirically quantified domain models, ontological structures, and cybernetic mechanism breakdowns.
   - **Strictly prohibits** dialogue templates, counter-rhetorical prompts, reactive discourse, or contrarian tone. The repository maintains an objective, academic, systems-engineering posture at all times.

2. **`skills/` (Action & Skill Layer)**:
   - Encapsulates concrete execution logic (e.g., multi-platform harvesting engine `harvester`, signal-to-noise evaluator `source-evaluator`).
   - If downstream evaluation or reasoning skills are introduced, they consume `knowledge/` strictly as a read-only dependency, preventing backward pollution into the core ontological truth layer.

## Domain Directory

| Domain ID | Name | Core Academic Pillars | Status | Directory |
| :--- | :--- | :--- | :--- | :--- |
| `anthropoid-lifecycle` | Anthropoid Lifecycle Control & Age-Stage Determinism | Cybernetics, Operations Research, Cognitive Neuroscience, Chrononormativity Sociology | `active` | [`knowledge/anthropoid-lifecycle/`](./anthropoid-lifecycle/index.en.md) |
| `labor-system` | Labor System Design & Institutional Age Gates | Institutional Economics, Comparative Labor Law, Policy Analysis | `active` | [`knowledge/labor-system/`](./labor-system/index.en.md) |
| `cognitive-bias` | Cognitive Biases & Persuasion Mechanics of Lifecycle Control | Behavioral Economics, Cognitive Psychology, Prospect Theory | `active` | [`knowledge/cognitive-bias/`](./cognitive-bias/index.en.md) |
| `innovation-economics` | 创新经济学与多样性组合论 | Innovation Economics, Complexity Theory, Multi-Armed Bandit Optimization | `active` | [`knowledge/innovation-economics/`](./innovation-economics/index.en.md

### anthropoid-lifecycle Concept Registry (Complete)

| Concept ID | Name | File |
| :--- | :--- | :--- |
| `definition` | Formal Ontological Definition & Boundary Conditions | `anthropoid-lifecycle/definition.en.md` |
| `social-clock-phenomenology` | Social Clock Phenomenology & Institutional Gatekeeping | `anthropoid-lifecycle/social-clock-phenomenology.en.md` |
| `cybernetics-variance-suppression` | Cybernetics of Variance Suppression & Pipeline Deadlocks | `anthropoid-lifecycle/cybernetics-variance-suppression.en.md` |
| `asynchronous-lifecourse-model` | Asynchronous Event-Driven Lifecourse Model | `anthropoid-lifecycle/asynchronous-lifecourse-model.en.md` |
| `human-capital-option-value` | Human Capital Option Value & Premature Lock-in Economics | `anthropoid-lifecycle/human-capital-option-value.en.md` |
| `signaling-vs-mastery` | Spence Signaling Model vs. Genuine Mastery | `anthropoid-lifecycle/signaling-vs-mastery.en.md` |
| `internalization-mechanisms` | Internalization Mechanisms: Panopticon & Learned Helplessness | `anthropoid-lifecycle/internalization-mechanisms.en.md` |
| `late-bloomer-empirical` | Non-Linear High Achievement Trajectory Empirical Case Library | `anthropoid-lifecycle/late-bloomer-empirical.en.md` |

### labor-system Concept Registry (Complete)

| Concept ID | Name | File |
| :--- | :--- | :--- |
| `china-institutional-gates` | China's Institutional Age Gates in Labor Markets | `labor-system/china-institutional-gates.en.md` |
| `global-age-discrimination-law` | Global Age Discrimination Law Comparative Study | `labor-system/global-age-discrimination-law.en.md` |

### cognitive-bias Concept Registry (Complete)

| Concept ID | Name | File |
| :--- | :--- | :--- |
| `availability-heuristic` | Availability Heuristic & Peer-Comparison Anxiety Amplification | `cognitive-bias/availability-heuristic.en.md` |
| `status-quo-loss-aversion` | Status Quo Bias & Loss Aversion: Manufacturing Compliance | `cognitive-bias/status-quo-loss-aversion.en.md` |
| `temporal-discounting` | Temporal Discounting Distortion & Enforced Myopia | `cognitive-bias/temporal-discounting.en.md` |

### innovation-economics Concept Registry (Complete)

| Concept ID | Name | File |
| :--- | :--- | :--- |
| `exploration-exploitation` | Exploration-Exploitation Trade-off & Macroeconomic Innovative Capacity | `innovation-economics/exploration-exploitation.en.md` |
| `antifragility-nonlinear-career` | Antifragility and Non-Linear Career Paths | `innovation-economics/antifragility-nonlinear-career.en.md` |

## Governance and Quality Assurance

- **Concept Atomicity**: Each concept file represents an isolated, unambiguous scientific proposition or system mechanism.
- **Provenance & Falsifiability**: Concepts must include explicit `sources` fields citing authoritative peer-reviewed papers, empirical surveys, statutory data, or primary field samples.
- **Bilingual Parity**: Per repository rules, every `.md` file must be strictly mirrored by a corresponding `.en.md` file.
