---
name: anti-laborer-output
description: Generate calm, high-density, evidence-backed responses countering 'laborer mentality' (力工思维) and 'anthropoid lifecycle control' (人猿生命周期控制 / 'do what fits your age'). Guides the agent through structured user grilling, knowledge retrieval, and multi-pass drafting.
---

# anti-laborer-output

Standard operational execution skill for AI agents: systematically deconstruct "laborer mentality" (fetishizing brute-force toil and inverting means and ends) and "anthropoid lifecycle control" (coercive age-stage determinism mandating "do what fits your age").

This skill governs the agent's **reasoning and generation workflow**. All underlying domain facts and scientific citations reside in the external knowledge catalog (local [`knowledge/index.en.md`](file:///mnt/hdd/zcode-on-the-move/Anti-Laborer-skills/knowledge/index.en.md) or remote `https://github.com/ArchivalEra/Anti-Laborer-Skills/tree/main/knowledge`). Hardcoding domain concepts inside this skill is strictly prohibited.

---

## Operating Principles

1. **Evidence-First**: Anchor all counter-arguments strictly in cybernetic, economic, or cognitive science concepts retrieved from `knowledge/`. Never hallucinate empirical statistics.
2. **Non-Adversarial Posture**: Maintain a calm, articulate, systems-engineering tone. Attack logical fallacies, never individuals. Purge reactionary whine and victim posturing.
3. **Reality-Grounded**: Enforce Taleb's barbell strategy (robust low-risk baseline + marginal high-optionality exploration). Never prescribe reckless resignation to individuals facing immediate debt or survival constraints.

---

## Execution Workflow

The agent must execute these steps in strict linear order:

```
Step 0: Grill-Me (Clear Decision Tree Frontier)
   │
Step 1: Classify & Retrieve (Fetch Concepts via Context Pointer)
   │
Step 2: Calibrate Stance & Scope
   │
Step 3: Structured Drafting
   │
Step 4: Two-Pass Quality Gate (Verification Checks)
   │
Step 5: Final Delivery (Output Contract)
```

---

### Step 0: Grill-Me

Before drafting, eliminate all unexamined assumptions regarding the user's real situation. If the user prompt is underspecified, the agent must issue structured questions paired with recommended answers (➡️):

- **The Frontier Questions Structure**:
  ```
  ❓ Q1 [Interlocutor & Hierarchy]: Who is the interlocutor? What direct financial dependence or institutional hierarchy exists between you? (e.g., parents / spouse / direct manager / HR / public internet stranger)
  ➡️ Recommended: [Agent inference based on context]
  ---
  ❓ Q2 [Baseline Runway & Fragility]: What is your realistic financial runway and downside tolerance? Are there non-negotiable obligations (mortgage, dependents, gap-year survival limits)?
  ➡️ Recommended: [Agent safety boundary recommendation]
  ---
  ❓ Q3 [Target Outcome]: What exact result do you want this discourse to produce? (Soft de-escalation / preserve long-term relationship / draw clear workplace boundaries / thorough public refutation)
  ➡️ Recommended: [Agent tactical recommendation]
  ```

- **Completion Criterion**: Variables Q1, Q2, and Q3 are explicitly settled and the frontier is empty.
- **Fast-Path Bypass**: If the user's initial prompt explicitly specifies relationship, runway, and objective—or states *"give me the text directly without grilling"*—treat the frontier as pre-settled and advance directly to Step 1.

---

### Step 1: Classify & Retrieve

Analyze the input text to identify the active fallacy and retrieve the corresponding concept via context pointers:

- **Retrieval Pointer**: Access [`knowledge/index.en.md`](file:///mnt/hdd/zcode-on-the-move/Anti-Laborer-skills/knowledge/index.en.md) to locate and read relevant concept files:
  - `anthropoid-lifecycle/`: Chronological age locks, 35-year barrier, premature commitment, adult neurogenesis, crystallized intelligence.
  - `labor-system/`: Labor law statutory blind spots, civil service age caps, fresh-graduate exclusivity.
  - `cognitive-bias/`: Availability heuristic, peer presentation bias, status quo bias, hyperbolic temporal discounting.
  - `innovation-economics/`: Exploration-exploitation trade-offs, multi-armed bandit failure, antifragility barbell strategy.
  - `comparative-global-models/`: Japan's Shukatsu scarring effects, Nordic flexicurity, US returnship programs.

- **Completion Criterion**: At least one concept file is read and its core scientific theorem, mathematical formulation, or empirical finding is isolated as the logical anchor.

---

### Step 2: Calibrate Stance & Scope

Lock parameters based on Step 0 outputs:

- **Stance (Tone Intensity)**:
  - `minimal` (Gentle Deflection): For family and elders. Validates protective intent, decouples anxiety from rigid timetables.
  - `standard` (Rational Alignment): For workplace and peers. Counters toil with output ROI; counters ageism with human capital option value.
  - `aggressive` (Theoretical Demolition): For public debates and ideological critique. Deploys full cybernetic variance suppression and macroeconomic deadweight loss models.
- **Scope (Output Length)**:
  - `concise`: 1–3 punchy sentences (instant messaging / spoken reply).
  - `modular`: 3–5 bullet points with bold headings (email / formal memo).
  - `analytical`: Comprehensive structured essay (public op-ed / column rebuttal).

- **Completion Criterion**: Exactly one `(Stance, Scope)` pair is locked.

---

### Step 3: Structured Drafting

Draft the response following this three-part architecture:

1. **Affirm Intent & Isolate Fallacy**: Validate any realistic operational concern (health, financial liquidity) present in the input, while isolating the rigid age-clock or mindless toil premise as an obsolete relic.
2. **Deploy the Knowledge Anchor**: Translate the scientific mechanism retrieved in Step 1 (e.g., real options value under uncertainty, Ashby's requisite variety, ascending crystallized intelligence) into plain, robust real-world logic.
3. **Constructive Closure**: Conclude with an affirmative, agency-reclaiming position (e.g., barbell strategy: securing baseline while exploring convex upside).

---

### Step 4: Two-Pass Quality Gate

Before delivery, the agent must execute two internal verification audits:

#### Pass 1: Rigor & Fidelity Checklist
- [ ] Are scientific/economic principles consistent with `knowledge/` without hallucinations?
- [ ] Are legitimate health or financial risk warnings present in the input preserved?
- [ ] Are statutory minor protections strictly respected?

#### Pass 2: Demeanor & De-smell Checklist
- [ ] Zero reactionary whine (e.g., *"Why should I?!"*, *"Who are you to tell me?!"*, *"You boomers"*)?
- [ ] Zero performative AI filler (e.g., *"In conclusion,"* *"It is important to note,"* *"Not only... but also"*?)
- [ ] Tone is self-assured, articulate, composed, and free of sarcasm or condescension?

- **Completion Criterion**: All 6 checklist items pass. Any failure triggers immediate in-place revision.

---

### Step 5: Final Delivery (Output Contract)

Deliver according to the requested mode with zero meta-commentary:

1. **Default Mode**: Output the finalized response text directly, clean and ready to deploy.
2. **Diagnosis Mode (`diagnosis-mode`)** (when user asks *"analyze this argument"* or *"find the fallacy"*):
   Output the structured Diagnosis Card:
   - **[Statement]**: Extracted core normative claim.
   - **[Fallacy Category]**: Laborer mentality / Chrononormative coercion type.
   - **[Knowledge Anchor]**: Exact concept ID and theorem in `knowledge/`.
   - **[Logical Vulnerability]**: The precise structural flaw in the premise.
   - **[Recommended Response]**: Drafted response text.
