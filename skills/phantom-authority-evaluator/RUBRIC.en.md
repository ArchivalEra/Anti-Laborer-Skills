# Evaluation Rubric: "Appeal to Phantom Authority" (The Great Buddha Fallacy)

[English Version](./RUBRIC.en.md) | [中文版本](./RUBRIC.md)

---

## 1. Concept Definition & Classification Taxonomy

"Appeal to Phantom Authority" (colloquially: "invoking the Great Buddha to preach grand doctrine" or *"how could a giant firm / ancestors not have thought of that?"*) is an input-side cognitive defect that anchors to an anonymous, non-dialogic omniscient totem to abort causal reasoning and force status quo rationalization.

### Archetypes of Invoked Phantom Totems

| Archetype ID | Surface Linguistic Markers | Invoked Phantom Totem | Actual Physical / Organizational Causality |
| :--- | :--- | :--- | :--- |
| **`industrial_omniscience`**<br>(Industrial Mega-Firm Omniscience) | *"How could a giant firm like X not have thought of that?"*<br>*"Do their tens of thousands of elite engineers know less than you?"*<br>*"Apple/Huawei must have profound hidden reasons."* | An idealized, flawless collective of god-like corporate engineers. | Bill-of-materials (BOM) cost limits, thermal physics trade-offs, internal organizational silos, project launch deadlines, Herbert Simon's satisficing principle. |
| **`historical_heritage`**<br>(Historical Heritage Sanctification) | *"Across 5,000 years, wouldn't imperial court doctors have realized?"*<br>*"Our ancestors have passed this down for millennia—are you smarter than them?"* | An abstract omniscient council of ancient physicians and dynastic forebears. | Total lack of double-blind randomized clinical trials, pre-modern ignorance of microbiology/pharmacokinetics, survivorship bias, path dependency. |
| **`institutional_omniscience`**<br>(Institutional System Omniscience) | *"Wouldn't the senior leadership and top think-tanks at the top be smarter than you?"*<br>*"The system engineered it this way for a grand strategic reason."* | An ethereal, hyper-rational pantheon of top-level bureaucratic planners. | Principal-agent problems, information decay in hierarchical reporting, KPI misalignment, institutional self-preservation prioritized over systemic efficiency. |

---

## 2. Root Cause Mapping: Reality vs. Hallucinated Omniscience

When an interlocutor deploys a phantom authority to dismiss a defect, the parser maps the shielded defect to its real-world engineering or structural driver (anchored in `knowledge/cognitive-bias/system-justification-panglossian.md`):

| Root Cause ID | Systemic Mechanism | Exemplar Case |
| :--- | :--- | :--- |
| `cost_bom_compromise` | Tight Bill-of-Materials budget forcing suboptimal engineering trade-offs | Cheap low-frequency PWM dimming, plastic brackets, omitting vapor-chamber heat pipes. |
| `organizational_silo` | Departmental silos and divergent departmental KPIs degrading integrated user experience | Hardware cuts component costs by $0.10, forcing software to implement complex thread scheduling that introduces frame drops. |
| `path_dependency_legacy` | Unamortized tooling expenses or backwards-compatibility constraints | Reusing legacy chassis molds across product generations despite superior thermal architectures being available. |
| `historical_epistemic_gap` | Absence of modern scientific detection methods and statistical controls in pre-modern eras | Traditional herbal concoctions lacking chronic toxicity screening; heavy-metal bioaccumulation unrecognized. |
| `principal_agent_distortion` | Bureaucratic self-preservation and compliance formalisms prioritized over user outcomes | Administrative procedures remain Byzantine because managers optimize for liability avoidance rather than operational velocity. |

---

## 3. Epistemic Density & Thought-Termination Index (TTI)

### Thought-Termination Index (TTI: 0.0 – 1.0)
- **`TTI = 1.0` (Pure Thought Termination)**: Text contains zero physical, technological, or empirical argumentation; relies 100% on *"how could a giant firm / ancestors not have thought of that?"* to shut down inquiry. Substantive information value is scored at 0.
- **`TTI = 0.5 - 0.9` (Hybrid Obfuscation)**: Text mentions superficial product specs or subjective claims, but the core premise rests on invoking the phantom totem.
- **`TTI < 0.3` (Legitimate Technical Discourse)**: Specific technical parameters, empirical datasets, peer-reviewed double-blind studies, or identifiable engineer patents are discussed without deifying an anonymous collective.

### Signal-to-Noise Ratio (SNR) Verdict
- Texts with `TTI >= 0.7` are categorized as `FLAG_PHANTOM_AUTHORITY_LOW_SNR`. They are cataloged as cognitive defect samples, but excluded from factual empirical knowledge pools.
