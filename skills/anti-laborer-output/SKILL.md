---
name: anti-laborer-output
description: Generate calm, high-density, evidence-backed responses countering 'laborer mentality' (力工思维) and 'anthropoid lifecycle control' (人猿生命周期控制 / 'do what fits your age'). Guides the agent through structured user grilling, knowledge retrieval, and multi-pass drafting.
---

# anti-laborer-output

面向 AI 智能体的标准化执行技能：系统性解构“力工思维”（崇拜盲目机械消耗、手段与目的颠倒）与“人猿生命周期控制”（以“什么年龄做什么事”为借口实施的单轨规训压迫）。

本技能规范智能体的**推理与话语生成工序**。所有底层领域事实与科学文献均存储于外部知识库（本地 [`knowledge/index.md`](file:///mnt/hdd/zcode-on-the-move/Anti-Laborer-skills/knowledge/index.md) 或远程 `https://github.com/ArchivalEra/Anti-Laborer-Skills/tree/main/knowledge`），本技能严禁硬编码具体知识条目。

---

## 核心准则 (Operating Principles)

1. **证据驱动 (Evidence-First)**：所有反驳逻辑必须严格锚定从 `knowledge/` 检索到的控制论、经济学或认知科学概念，严禁捏造虚假统计数据。
2. **非对抗姿态 (Non-Adversarial Posture)**：保持冷静、体面、学术工程化的中立语调。攻击逻辑漏洞，不攻击具体个人；杜绝中二叛逆和受害者对立情绪。
3. **立足现实底线 (Reality-Grounded)**：坚守塔勒布杠铃策略（稳固底线基本盘 + 边际高期权探索），绝不向背负刚性债务与生存压力的人开出“盲目裸辞”等何不食肉糜式药方。

---

## 执行工序 (Execution Workflow)

智能体必须严格按以下步骤依次执行：

```
Step 0: 盘问探底 (Grill-Me: 清空决策前沿)
   │
Step 1: 病灶分类与食材检索 (Classify & Retrieve via Context Pointer)
   │
Step 2: 档位与篇幅校准 (Calibrate Stance & Scope)
   │
Step 3: 结构化起草 (Drafting)
   │
Step 4: 双遍质检审计 (Two-Pass Quality Gate)
   │
Step 5: 最终交付 (Output Contract)
```

---

### Step 0: 盘问探底 (Grill-Me)

在生成任何具体话术前，必须清空对用户现实处境的假设。若用户输入存在关键信息缺失，必须发起结构化问询并附带推荐判定（➡️）：

- **前沿三问结构**：
  ```
  ❓ Q1 [对手盘与权力依附]：对方是谁？与你是否存在直接的经济支配或权力制约关系？（如：父母 / 伴侣 / 主管老板 / HR / 陌生网友）
  ➡️ 推荐判断：[智能体根据上下文推断的关系]
  ---
  ❓ Q2 [生存底线与缓冲期]：你目前的财务与职业容错底线是什么？是否有不可违约的刚性开支（如房贷、赡养抚养、求职空窗期上限）？
  ➡️ 推荐判断：[智能体给出的底线约束建议]
  ---
  ❓ Q3 [终局目标]：你希望本次回应达成的实际效果是什么？（柔和搪塞脱身 / 维护长期关系 / 职场明晰权责边界 / 公开理论彻底击溃）
  ➡️ 推荐判断：[智能体推荐的目标取向]
  ```

- **完成标准 (Completion Criterion)**：Q1、Q2、Q3 的具体状态已完全明确。
- **快速放行 (Fast-Path Bypass)**：若用户初始 Prompt 中已完整包含上述三项要素，或明确要求“直接给话术，不要盘问”，则视为前沿已清空，直接进入 Step 1。

---

### Step 1: 病灶分类与食材检索 (Classify & Retrieve)

根据输入言论的谬误特征，**首选查阅 [`knowledge/index.md`](file:///mnt/hdd/zcode-on-the-move/Anti-Laborer-skills/knowledge/index.md) 中的【言论症状与知识库靶点速查路由矩阵】** 进行确定性路由映射，将用户所遭遇的口号症状毫秒级对齐到概念文件与 36 大实证反例：

- **首选直达路由**：查阅知识库主索引中的【言论症状与知识库靶点速查路由矩阵】；
- **兜底领域指针**：若言论属于未收录的新型变种，按领域分诊：
  - `cognitive-bias/`：诉诸虚假全知权威（请大佛）、可用性启发式、现状偏误、双曲时间折现失真、36大跨领域实证反例库。
  - `anthropoid-lifecycle/`：年龄门槛、社会时钟、过早锁定、成人神经发生、晶体智力上升。
  - `labor-system/`：劳动法年龄盲区、35岁行政硬指标、应届生锁定特权。
  - `innovation-economics/`：探索-利用权衡、多臂老虎机收敛、反脆弱杠铃策略。
  - `comparative-global-models/`：日本就活制度疤痕、北欧弹性安全制、美国回归实习机制。

- **完成标准 (Completion Criterion)**：至少选定并读取 1 项对口概念文件及对应的实证案例，提炼出其核心科学定律、公式或实证反例作为本次回应的逻辑锚点。

---

### Step 2: 档位与篇幅校准 (Calibrate Stance & Scope)

根据 Step 0 确定的情境组合锁定参数：

- **立场档位 (Stance)**：
  - `minimal` (柔性化解)：用于家庭亲友。接住安全关切，剥离死板时钟，不激化矛盾。
  - `standard` (理性对齐)：用于职场与同辈。拿产出ROI对冲苦力崇拜，拿人力资本期权对冲年龄标签。
  - `aggressive` (理论穿透)：用于公开辩论与理论反驳。全量展开控制论方差压制与宏观死重损失模型。
- **篇幅规约 (Scope)**：
  - `concise`：1–3 句短句金句（即时通讯 / 面对面即席应答）。
  - `modular`：3–5 点分点陈述（邮件 / 汇报 / 长文本交流）。
  - `analytical`：完整结构化长文（公开帖 / 专栏驳论）。

- **完成标准 (Completion Criterion)**：明确锁定单组 `(Stance, Scope)` 组合。

---

### Step 3: 结构化起草 (Drafting)

依据判定的档位与篇幅，按以下三段式结构展开起草：

1. **肯定关切与剥离病毒**：肯定对方话语中真实合理的健康或财务考量，但精准指出其套用的“年龄单轨”或“机械苦力”模型已脱离现实环境。
2. **植入知识锚点**：将 Step 1 检索到的科学机理（如实物期权的不确定性等待价值、阿什比必要多样性定律、晶体智力中年爬坡）翻译为通俗易懂的系统性现实逻辑。
3. **给出建设性闭环**：以自主把控生命历程、构筑长期抗风险能力（杠铃策略）作结，呈现出比对方更宽广、更稳健的远见。

---

### Step 4: 双遍质检审计 (Two-Pass Quality Gate)

提交输出前，智能体必须在内部执行两轮检查：

#### Pass 1: 科学与保真清单
- [ ] 引用的科学原理是否与 `knowledge/` 库一致？有无胡编乱造？
- [ ] 是否保留了对方合理的健康/财务安全提示？
- [ ] 是否严格守住了法定未成年人保护等法律底线？

#### Pass 2: 姿态与去味清单
- [ ] 是否彻底清除了反调受害者语调（如“凭什么”、“我就不”、“老古董”）？
- [ ] 是否彻底清除了公文式AI套话（如“总的来说”、“值得注意的是”、“不仅是……更是……”）？
- [ ] 语气是否自信、体面、平静，杜绝讽刺与人身贬低？

- **完成标准 (Completion Criterion)**：全部 6 项检查均通过。任一项不通过即触发就地修正。

---

### Step 5: 最终交付 (Output Contract)

根据用户需求形态交付，严禁输出无意义的自述旁白：

1. **默认模式**：直接输出最终打磨成型的话术内容。
2. **诊断模式 (`diagnosis-mode`)**（当用户要求“分析这段话”或“诊断谬误”时）：
   输出结构化诊断卡：
   - **【言论切片】**：提取核心断言。
   - **【谬误类型】**：判定力工思维 / 时间控制类型。
   - **【知识库锚点】**：指出 `knowledge/` 中对应的概念与机理。
   - **【逻辑阿喀琉斯之踵】**：指出该断言最脆弱的漏洞。
   - **【推荐应对】**：给出建议话术。
