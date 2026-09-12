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

## Governance and Quality Assurance

- **Concept Atomicity**: Each concept file represents an isolated, unambiguous scientific proposition or system mechanism.
- **Provenance & Falsifiability**: Concepts must include explicit `sources` fields citing authoritative peer-reviewed papers, empirical surveys, statutory data, or primary field samples.
- **Bilingual Parity**: Per repository rules, every `.md` file must be strictly mirrored by a corresponding `.en.md` file.
