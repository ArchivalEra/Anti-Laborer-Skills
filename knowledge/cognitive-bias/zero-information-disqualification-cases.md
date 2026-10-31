---
id: okf.knowledge.cognitive_bias.zero_information_disqualification_cases
name: 零信息量资格判定实证案例库：载体无关的犬儒免责外壳与检出作用域失效
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
  - title: "一手语料采样：移动端技术讨论线程末位评论（用户名已打码）"
    authors: "匿名样本"
    year: 2026
    type: field_sample
    citation: "单条评论文本样本；采集日 2026-09-22；载体为 1440x3986 评论区弹层截图"
  - title: "zai-org/feedback #707 — 登录态下静默上传工作区完整 .git 历史到云端（含 objects/reflog），设置项无法关闭"
    authors: "luwanglin（用户报告）"
    year: 2026
    type: issue_report
    citation: "https://github.com/zai-org/feedback/issues/707（2026-09-18 提交，状态 open，17 条评论）"
  - title: "zai-org/feedback #715 — 数据安全 / 隐私：未经用户同意上传工作区快照"
    authors: "54shitaimzf（用户报告）"
    year: 2026
    type: issue_report
    citation: "https://github.com/zai-org/feedback/issues/715（2026-09-18 提交，状态 open，4 条评论）"
  - title: "zai-org/zcode-plugins #16 — 为什么 ZCode 要静默上传我们的全部 Git 历史"
    authors: "vulnnull（用户报告）"
    year: 2026
    type: issue_report
    citation: "https://github.com/zai-org/zcode-plugins/issues/16（2026-09-18 提交，状态 open，3 条评论）"
  - title: "ZCode Privacy Policy"
    authors: "Z.ai / zai-org"
    year: 2026
    type: policy_document
    citation: "https://zcode.z.ai/en/privacy（生效日 2026-06-15；2026-09-19 经第三方核读，未提及快照、工作区或 .git 上传）"
verified: true
links:
  related:
    - okf.knowledge.cognitive_bias.cynical_emoji_superiority_marker
    - okf.knowledge.cognitive_bias.in_theory_hedging_trap
    - okf.knowledge.cognitive_bias.availability_heuristic
---

# 零信息量资格判定：载体无关的犬儒免责外壳与检出作用域失效

## 0. 分析对象限定 (Scope Restriction)

本知识库的分析对象是**言论文本**，不是**人类**。本条目及其派生的任何判据，均**禁止**依赖对发言者身份、职业、社会阶层或心理状态的推断——从文本反推发言者所得的命题不可证伪，因而不可纠错，属于死知识。

具体到本案例库：任何"这类话是谁说的"式断言（生产者画像）一律不构成证据，也不得写入检出规则或处置铁律。可检验的对象只有两项——**文本自身的结构**，以及**文本的时间序列**。

---

## 1. 现象界定 (Phenomenon)

**零信息量资格判定（Zero-Information Disqualification）**：在零证据链的前提下，单方面对讨论对手的**能力、资格或熟悉度**作出判定。该判定自身不提供任何机制、数据、因果链或可检验命题，因此读者既无法据其行动，也无法据其验证。

```
[议题层: 该平台能否限制 Agent 的写入与外传?]
                    │  回避机制层
                    ▼
[人格层: "你不熟悉该平台"] ──► 零证据链 + 单方面资格判定 + 免责外壳
                    │
                    ▼
        [信息量归零: 无可操作命题, 无可检验断言]
```

判据的三个合取项，缺一不构成：

| 要素 | 判定内容 |
| :--- | :--- |
| **零证据链** | 不引用任何具体机制、数字、可复现事实或因果推导 |
| **单方面资格判定** | 命题落点是"对方不懂/不熟/没资格"，而非议题本身的真值 |
| **免责外壳** | 携带退路（表情符码、"只能说…"、"建议多读点书"等任一形式），使发言者可在被追问时降格为"随口一说" |

**载体无关性（Carrier Independence）**：第三项可由多种载体实现，表情符号（😂 / [捂脸]）只是其中最常见的一种。**载体是变量，机制是不变量。** 以某一载体为必要条件的判据，会系统性漏检本类言论。

---

## 2. 实证案例 (Case Corpus)

### 案例 1：平和技术线程末位的载体无关实例

- **语境**：移动端评论区弹层，一个就“如何对 AI 编程 Agent 施加写入与出网限制”展开的技术线程。前序讨论平和且落在具体机制上（写入锁、出网阻断、快照目录写限制）。该线程的公开语境是 2026-09-18 前后一批关于 ZCode（智谱 / Z.ai）静默上传工作区快照的技术报告，具体指控为：登录态下对工作区做快照并将完整 `.git` 历史一并打包上传，信封加密的私钥仅存服务端、用户本地无法解密，且无关闭开关（信源见 frontmatter 与 §6）。该背景仅用于说明本线程为何聚焦“写入与外传限制”，**不构成本案例（评论四）的证据基础**。
- **样本原句**：`只能说你对 win 不太熟悉`

| 判据要素 | 命中情况 |
| :--- | :--- |
| 零证据链 | 命中。未点名任何具体的平台侧控制手段（ACL 与 icacls、WDAC、出站防火墙规则、AppContainer、无网虚拟机等） |
| 单方面资格判定 | 命中。落点是"你不熟悉 win"，而非"该平台能否被限制"这一议题真值 |
| 免责外壳 | 命中。"只能说…"构成降格退路，与表情符码的"我只是随口一说"功能等价 |
| 伴随 emoji | **未命中**。零 emoji、零脏话、零立场标签、零攻击性标点 |

- **本案例的检出意义**：该样本在原 `cynical-emoji-superiority-marker` §4.1 判据下**无法归类**，因为该判据把"密集伴随符码"设为合取项。它证明原判据的作用域被绑定在载体上，故作为本条的**载体变体探针**归档。

---

## 3. 机制解构 (Deconstruction)

### 3.1 无知论证与个人难以置信 (Walton, 1996)
"我不知道该平台怎么限制它"与"该平台无法限制它"之间的推理跳跃，是无知论证（argumentum ad ignorantiam）在个人层面的变体：**以自身认知边界冒充客体属性边界**。两者的可检验区分是明确的——客体属性边界需给出机制或反例；认知边界只需承认"我未掌握"，无需任何举证成本。

### 3.2 可信度贬损与证词不正义 (Fricker, 2007)
判定的落点从命题转向发言者，属可信度贬损：以未举证的资格质疑，预先为对手的后续论证降权。其成本结构为**断言≈0、演示≫0**，因此可在不付出机制成本的前提下兑现等量地位收益——这是该言论形态高度稳定的原因。

### 3.3 朴素实在论 (Ross & Ward, 1996)
发言者默认自己对平台能力的认知即为客观图景，于是分歧被自动归因为对方的信息缺失。这正是"你不熟悉"句式的生成条件。该归因不可靠的理由见 §0：由一句话反推一个人的知识状态，方差无界且不可观测。

### 3.4 免责外壳的载体无关性 (Shackel, 2005)
Motte-and-bailey 的退守结构不依赖 irony。emoji 版退守为"我只是发个表情"；纯文本版退守为"我就这么一说"。两者功能同一，**因此免责外壳不构成任何载体的专有特征**。

---

## 4. 判据与处置 (Criteria & Protocol)

### 4.1 载体无关判据
- **标记**：`FLAG_ZERO_INFORMATION_DISQUALIFICATION`
- **合取条件**：§1 三要素同时命中，**载体不限**
- **不与载体绑定**：缺 emoji 不构成豁免理由；有 emoji 也不足以单独触发

### 4.2 处置铁律（言论层）
- **理由表述必须落在言论上，不得落在人上**：写作"该言论无可操作命题，故不投入算力"，而非"对方是某类人，故不值得回应"。前者可对任意单条输入独立判定并复核；后者不可证伪，且会双向误判——机制扎实的长评论若出自同一人会被放行，载体变体若出自有能力的人会被误判。
- **动作**：不展开事实辩驳（无可辩驳对象）；归档为言论标本；零算力纠缠。

---

## 5. 检出作用域失效记录与修复 (Detection-Scope Failure & Fix)

首次实测（2026-09-22，`skills/source-evaluator/scripts/filter.py` 修复前）：符码类判据**完全未实现**，`FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` 没有执行者，载体无关判据更不存在。

| 输入文本 | 节点文档要求 | 修复前 | 修复后 |
| :--- | :--- | :--- | :--- |
| `笑死我了[捂脸]，建议多读点书` | `FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` | `ACCEPTED`，snr 0.3 | `REJECTED` / `L1_HARD_CUT`，命中该 flag |
| `你认真的吗😂` | `FLAG_CYNICAL_EMOJI_SNR_COLLAPSE` | `ACCEPTED`，snr 0.3 | `REJECTED` / `L1_HARD_CUT`，命中该 flag |
| `只能说你对 win 不太熟悉` | 本条 §4.1 | `ACCEPTED`，snr 0.3 | `REJECTED` / `L1_HARD_CUT`，`FLAG_ZERO_INFORMATION_DISQUALIFICATION` |

修复内容：`filter.py` 新增载体无关资格判定合取检（免责外壳 + 单方面资格判定 + 零证据链），并纳入 9 项自测。误伤对照：`Windows 上可以用 icacls 把项目目录的写权限收掉，再配一条出站防火墙规则阻断该进程。` 与线程内第 2 条评论（`牢debian上锁个写入锁个上传很简单…`）在修复后仍判 `ACCEPTED`——机制被点名的长评论与平和的机制讨论不受影响。

---

## 6. 待证与边界 (Open Questions)

1. **已溯源项（2026-09-22 补）**：线程语境所指的指控已完成溯源，证据为 frontmatter 所列三份 issue 报告与一份隐私政策。要点：① `zai-org/feedback` 为 ZCode 官方反馈仓库，自述“ZCode 用户建议与反馈收集，处理状态全程公开”；② 三份报告均于 2026-09-18 提交且至今 open，含可复现技术细节——本地 `~/.zcode/v2/checkpoints` 与 `lastAcceptedManifestHash` 痕迹、约 256 MB 加密包及其 12,188 文件 / 341,492,472 字节清单、baseline 42,411 文件且 `.git` 占 86.6%、双条件开启判定（`repoSnapshotIndexingEnabled` 与 `repoSnapshotIndexingUserConfigured`）均为假仍触发、负责上传的 sidecar 登录即启动、删除后 30 分钟内重打包重传；③ 评论区有多名用户在各自机器上独立复现，其中一份（2026-09-20）报告**非 git 工作区**同样触发；④ 隐私政策未提及该类上传；⑤ 经查**未见官方实质性回应**，thread 内仅机器人收件回复。**本库未自行审计其二进制**，故此处记录的是“首手技术报告 + 多名独立复现 + 官方未回应”，不等于本库完成的独立验证。
2. **不作为判据的假设**：任何关于本类言论生产者身份、阶层或心理的断言，属不可证伪的待证假设，不进入检出规则与处置铁律（§0）。
3. **待检验的可证伪命题**：本类言论是否随发话者获得该领域的一手实践而减少——这是可观测的行为轨迹命题，与静态画像不同，允许作为假设保留并检验。
