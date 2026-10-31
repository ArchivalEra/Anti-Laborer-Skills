---
id: okf.knowledge.cognitive_bias.zero_information_disqualification_cases
name: "Zero-Information Disqualification Case Library: Carrier-Independent Cynical Shielding and Detection-Scope Failure"
type: Concept
status: active
spec_version: "0.2"
last_updated: "2026-09-22"
stewards:
  - team: Anti-Laborer Architecture & Knowledge Engineering Team
tags:
  - epistemic-disqualification
  - zero-information-marker
  - carrier-independence
  - argument-from-incredulity
  - testimonial-injustice
  - detection-scope-failure
sources:
  - title: "Arguments from Ignorance"
    authors: "Walton, Douglas N."
    year: 1996
    type: academic_book
    citation: "Pennsylvania State University Press"
  - title: "Epistemic Injustice: Power and the Ethics of Knowing"
    authors: "Fricker, Miranda"
    year: 2007
    type: academic_book
    citation: "Oxford University Press"
  - title: "Naive realism in everyday life: Implications for social conflict and misunderstanding"
    authors: "Ross, Lee; Ward, Andrew"
    year: 1996
    type: academic_paper
    citation: "In Values and Knowledge, Lawrence Erlbaum Associates, 103-135"
  - title: "The Vices of Argument"
    authors: "Shackel, Nicholas"
    year: 2005
    type: journal_article
    citation: "Topoi, 24(2), 175-184"
  - title: "The Pragmatics of Computer-Mediated Communication"
    authors: "Herring, Susan C."
    year: 2013
    type: academic_paper
    citation: "Handbook of Pragmatics, De Gruyter Mouton, 1-32"
  - title: "Primary corpus sample: terminal comment in a mobile technical thread (usernames redacted)"
    authors: "Anonymous sample"
    year: 2026
    type: field_sample
    citation: "Single comment text sample; collected 2026-09-22; carrier is a 1440x3986 comment-sheet screenshot"
  - title: "zai-org/feedback #707 — Silent upload of the workspace's complete .git history to the cloud under a logged-in state (incl. objects/reflog); the setting cannot be disabled"
    authors: "luwanglin (user report)"
    year: 2026
    type: issue_report
    citation: "https://github.com/zai-org/feedback/issues/707 (filed 2026-09-18; open; 17 comments)"
  - title: "zai-org/feedback #715 — Data security / privacy: workspace snapshots uploaded without user consent"
    authors: "54shitaimzf (user report)"
    year: 2026
    type: issue_report
    citation: "https://github.com/zai-org/feedback/issues/715 (filed 2026-09-18; open; 4 comments)"
  - title: "zai-org/zcode-plugins #16 — Why does ZCode silently upload our entire Git history?"
    authors: "vulnnull (user report)"
    year: 2026
    type: issue_report
    citation: "https://github.com/zai-org/zcode-plugins/issues/16 (filed 2026-09-18; open; 3 comments)"
  - title: "ZCode Privacy Policy"
    authors: "Z.ai / zai-org"
    year: 2026
    type: policy_document
    citation: "https://zcode.z.ai/en/privacy (effective 2026-06-15; read by a third party on 2026-09-19, which found no mention of snapshot, workspace, or .git upload)"
verified: true
links:
  related:
    - okf.knowledge.cognitive_bias.cynical_emoji_superiority_marker
    - okf.knowledge.cognitive_bias.in_theory_hedging_trap
    - okf.knowledge.cognitive_bias.availability_heuristic
---

# Zero-Information Disqualification: Carrier-Independent Cynical Shielding and Detection-Scope Failure

## 0. Scope Restriction

The object of analysis in this knowledge base is **utterance text**, not **human beings**. This entry and every criterion derived from it are **forbidden** to depend on inferences about a speaker's identity, occupation, social class, or psychological state—a proposition reverse-engineered from text to person is unfalsifiable, hence uncorrectable, hence dead knowledge.

Concretely for this case library: any claim of the form *"who says things like this"* (a producer profile) constitutes no evidence whatsoever, and must never enter a detection rule or a handling protocol. Only two things are testable—**the structure of the text itself**, and **the text's time series**.

---

## 1. Phenomenon

**Zero-Information Disqualification**: without any evidentiary chain, unilaterally passing a verdict on an interlocutor's **competence, standing, or familiarity**. The verdict itself supplies no mechanism, no data, no causal chain, and no falsifiable proposition, so a reader can neither act on it nor verify it.

```
[Issue level: Can that platform restrict an agent's writes and egress?]
                    │  mechanism level bypassed
                    ▼
[Person level: "You don't know that platform"] ──► zero evidence + unilateral
                    │                                disqualification + shield
                    ▼
      [Information content collapses to zero: no actionable, no testable claim]
```

Three conjunctive criteria; any one missing means the pattern is absent:

| Element | What is being judged |
| :--- | :--- |
| **Zero evidentiary chain** | No named mechanism, figure, reproducible fact, or causal derivation |
| **Unilateral disqualification** | The verdict lands on "you don't understand / aren't familiar / lack standing," not on the truth of the issue itself |
| **Shielding shell** | Carries an escape hatch (emoji code, "one can only say…", "go read a book"—any form), letting the speaker retreat to "I was just saying it in passing" when pressed |

**Carrier independence**: the third element is realized by many carriers, of which emoji (😂 / [捂脸]) is merely the most common. **The carrier is a variable; the mechanism is the invariant.** Any criterion that makes one carrier a necessary condition will systematically miss this class of utterance.

---

## 2. Case Corpus

### Case 1: A carrier-free instance at the terminal position of an amicable technical thread

- **Context**: a mobile comment sheet on a technical thread about *how to impose write and egress restrictions on an AI coding agent*. The preceding discussion was amicable and stayed on concrete mechanisms (write locks, egress blocking, write restrictions on a snapshot directory). The thread's public context is a cluster of technical reports filed around 2026-09-18 concerning ZCode (Zhipu / Z.ai) silently uploading workspace snapshots. The specific allegation: under a logged-in state the workspace is snapshotted and its complete `.git` history is packed and uploaded alongside it, the envelope-encryption private key lives only server-side so the user cannot decrypt locally, and there is no off switch (sources in the frontmatter and §6). This background only explains why that thread focused on write and egress restriction; it forms **no evidentiary basis for this case** (comment #4).
- **Sample utterance**: `只能说你对 win 不太熟悉` ("One can only say you're not too familiar with Windows")

| Criterion | Hit |
| :--- | :--- |
| Zero evidentiary chain | Hit. Names no platform-side control whatsoever (ACLs and icacls, WDAC, outbound firewall rules, AppContainer, a network-isolated VM, etc.) |
| Unilateral disqualification | Hit. Lands on "you aren't familiar with Windows," not on whether the platform can be restricted |
| Shielding shell | Hit. "One can only say…" constitutes the demotion escape hatch, functionally equivalent to emoji's "I was just joking" |
| Accompanying emoji | **Miss.** Zero emoji, zero profanity, zero factional labels, zero aggressive punctuation |

- **Why this case matters for detection**: under the original `cynical-emoji-superiority-marker` §4.1 criteria this sample is **unclassifiable**, because those criteria make "emoji clustering" a conjunct. It demonstrates that the original criteria bound their own scope to a carrier, and is therefore archived here as a **carrier-variant probe**.

---

## 3. Deconstruction

### 3.1 Argument from Ignorance and Personal Incredulity (Walton, 1996)
The inferential leap from "I don't know how a platform restricts it" to "the platform cannot restrict it" is the personal-level variant of *argumentum ad ignorantiam*: **substituting one's own epistemic boundary for a boundary of the object**. The testable distinction is clean—an object's property boundary requires a mechanism or a counterexample; an epistemic boundary requires only the admission "I have not mastered this," at zero evidentiary cost.

### 3.2 Credibility Deflation and Testimonial Injustice (Fricker, 2007)
The verdict shifts from the proposition to the speaker, which is credibility deflation: an unevidenced challenge to standing that pre-emptively discounts the interlocutor's subsequent arguments. Its cost structure is **assertion ≈ 0, demonstration ≫ 0**, so it cashes an equal status payoff without paying any mechanism cost—which is precisely why the form is so stable.

### 3.3 Naive Realism (Ross & Ward, 1996)
The speaker presupposes that their own picture of the platform's capabilities *is* the objective picture, so disagreement is automatically attributed to the other party's missing information. That attribution is the generative condition of the "you aren't familiar" formula. Why it is unreliable is stated in §0: inferring a person's state of knowledge from one sentence has unbounded, unobservable variance.

### 3.4 The Shielding Shell Is Carrier-Independent (Shackel, 2005)
The motte-and-bailey retreat does not depend on irony. The emoji version retreats to "I was just dropping an emoji"; the plain-text version retreats to "I was just saying it in passing." The two are functionally identical, **so the shielding shell is not a proprietary feature of any carrier**.

---

## 4. Criteria & Protocol

### 4.1 Carrier-Independent Criteria
- **Flag**: `FLAG_ZERO_INFORMATION_DISQUALIFICATION`
- **Conjunction**: all three elements of §1 hit, **carrier unconstrained**
- **Not carrier-bound**: absence of emoji is no exemption; presence of emoji alone is not sufficient to trigger

### 4.2 Handling Protocol (Utterance Level)
- **The stated rationale must land on the utterance, never on the person**: write "this utterance carries no actionable proposition, so it warrants no compute," not "this person belongs to category X, so they don't merit a reply." The former can be applied to any single input independently and re-checked; the latter is unfalsifiable and misfires in both directions—a mechanism-rich long comment from the same person would be waved through, while a carrier variant from a competent person would be misjudged.
- **Action**: do not open a factual rebuttal (there is nothing to rebut); archive as an utterance specimen; spend zero compute on entanglement.

---

## 5. Detection-Scope Failure Record & Fix

First measurement (2026-09-22, before the fix to `skills/source-evaluator/scripts/filter.py`): the code-carrier criterion was **entirely unimplemented**—`FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` had no executor, and no carrier-independent criterion existed at all.

| Input text | Required by node documentation | Before fix | After fix |
| :--- | :--- | :--- | :--- |
| `笑死我了[捂脸]，建议多读点书` | `FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` | `ACCEPTED`, snr 0.3 | `REJECTED` / `L1_HARD_CUT`, flag hit |
| `你认真的吗😂` | `FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` | `ACCEPTED`, snr 0.3 | `REJECTED` / `L1_HARD_CUT`, flag hit |
| `只能说你对 win 不太熟悉` | §4.1 of this entry | `ACCEPTED`, snr 0.3 | `REJECTED` / `L1_HARD_CUT`, `FLAG_ZERO_INFORMATION_DISQUALIFICATION` |

What the fix does: `filter.py` gains a carrier-independent disqualification conjunction (shielding shell + unilateral competence verdict + zero evidentiary chain), covered by 9 self-tests. False-positive control: `Windows 上可以用 icacls 把项目目录的写权限收掉，再配一条出站防火墙规则阻断该进程。` and comment #2 in the thread (`牢debian上锁个写入锁个上传很简单…`) both still score `ACCEPTED` after the fix—mechanism-naming long comments and amicable mechanism discussion are unaffected.

---

## 6. Open Questions & Boundaries

1. **Sourced item (added 2026-09-22)**: the allegation referenced by the thread's context has now been traced, to the three issue reports and the privacy policy listed in the frontmatter. Key points: (1) `zai-org/feedback` is ZCode's official feedback repository, self-described as "collection of ZCode user suggestions and feedback, with handling status fully public"; (2) all three reports were filed 2026-09-18 and remain open, and carry reproducible technical detail—local traces at `~/.zcode/v2/checkpoints` and `lastAcceptedManifestHash`, a ~256 MB encrypted package with a manifest of 12,188 files / 341,492,472 bytes, a 42,411-file baseline of which `.git` accounts for 86.6%, a two-condition enablement gate (`repoSnapshotIndexingEnabled` and `repoSnapshotIndexingUserConfigured`) that fired despite both flags being false, an upload sidecar that starts on login, and repacking plus re-upload within 30 minutes of deletion; (3) multiple commenters reproduced it independently on their own machines, one of them (2026-09-20) reporting that it also fires on **non-git workspaces**; (4) the privacy policy makes no mention of this class of upload; (5) **no substantive official response was found**—the threads contain only an automated acknowledgement. **This repository has not audited the binaries itself**, so what is recorded here is "first-hand technical reports + multiple independent reproductions + no official response", which is not the same as an independent verification performed by this repository.
2. **Assumptions that are not criteria**: any assertion about the identity, class, or psychology of the producers of this class of utterance is an unfalsifiable, unproven hypothesis, and does not enter detection rules or handling protocols (§0).
3. **A falsifiable proposition awaiting test**: whether this class of utterance declines as a speaker acquires first-hand practice in the relevant domain. This is an observable behavioural-trajectory claim, unlike a static profile, and is permitted to remain as a hypothesis subject to testing.
