# Anti-Laborer-Skills

[English Version](./README.en.md) | [中文版本](./README.md)

---

## 📌 项目愿景与定位

**Anti-Laborer-Skills** 是一套面向 AI Agent 及知识工作者的**反力工话术生成技能库**。

本项目旨在以**高信息密度、严谨逻辑与科学风味（Scientific-flavored）**的方法论，系统性回应与解构各类**反智、虚无内耗与盲目崇尚机械低效劳动（“力工思维”）**的言论。

> [!IMPORTANT]
> ### 核心表述原则：杜绝反调情绪，坚持技术理性
> 本仓库的一切内容与生成技能，**严禁带着“我就是来唱反调”的对立情绪或叛逆姿态进行撰写**。
> 面对反智与非理性思潮，我们的回应基石不是情绪宣泄或网络对喷，而是**第一性原理、控制论、复杂系统理论、运筹学及认知科学**。我们以冷静客观、结构清晰、实证可复现的科学话术，穿透认知迷雾，提供降维解构与建设性方案。

---

## 🎯 核心目标

1. **识别与解构“力工思维”**：
   - 剖析以“盲目自我感动式机械消耗”、“鄙视智力设计与技术杠杆”、“将手段当目的”为代表的反智论调。
2. **生成科学风味的回应话术**：
   - 将系统工程学、运筹学优化模型、熵增定律及认知偏差理论融入自然语言生成，以扎实、体面且不可辩驳的科学逻辑化解偏见。
3. **沉淀标准化的 Agent Skills**：
   - 为大语言模型及自主智能体（ZCode Agent、Claude、GPT 等）提供即插即用的 Skills 体系，使 Agent 在复杂多变的舆论与辩论语境中保持高维度的专业判断与话术输出。

---

## 🛠 仓库工程规范与防御机制

为了确保知识库的严密性与持续一致性，本项目建立了严格的工程自动化校验机制：

### 1. 严格双语强约束 (Bilingual Mandate)
- 仓库内所有 Markdown 文件必须严格成对存在：任何 `filename.md` 必须配备同级同名的 `filename.en.md`。
- 本地配置了 `pre-commit` Git Hook，对暂存区中的 Markdown 进行双向配对检查，缺一不可。

### 2. 绝对路径白名单 (.gitignore)
- 仓库采用全量忽略（Ignore All）机制，不接受广义模糊通配符匹配（如 `*.md`、`!foo/*`）。
- 任何需要纳入版本控制的文件，必须以仓库根相对的绝对路径形式显式追加至 `.gitignore` 白名单（例如 `!/skills/example/SKILL.md`）。

### 3. Skills 与文档联动更新机制 (Auto-Sync Hook)
- 当任何位于 `skills/` 目录下的技能定义或文档发生变更时，Git Hook 强制要求本次提交必须同时包含对 `README.md` 与 `README.en.md` 的同步更新，杜绝文档脱节与索引失效。

### 4. 知识库与速查矩阵推送门禁 (Pre-Push Diagnostic Matrix Hook)
- 当推送（git push）涉及 `knowledge/` 知识库概念的修改或新增时，Pre-push Hook 强制校验主索引 `knowledge/index.md` 与 `knowledge/index.en.md`，要求必须同步更新【言论症状与知识库靶点速查路由矩阵】并将新增概念对齐挂载，确保下游输出智能体始终能毫秒级直达实证靶点。

## 🏛 核心架构：知识库与执行技能的解耦设计 (Decoupled Architecture)

本仓库在工程体系上严格贯彻 **“信息接收与知识总结” 与 “回答话语生成” 的彻底解耦**：

```
+-------------------------------------------------------------------------+
|                  1. 知识库层 (Knowledge Layer)                          |
|         采用 Google Open Knowledge Format (OKF v0.2) 标准规范           |
|                                                                         |
|  - 纯粹客观、同行评审的科学事实、统计调查、控制论与运筹学机理拆解       |
|  - 绝对禁止包含任何话术模板、辩论提示词或对抗性反调情绪                 |
|  - 路径：knowledge/<domain>/<concept>.md                                |
+-------------------------------------------------------------------------+
                                    |
                    作为只读客观真理依赖挂载 (Read-Only Dependency)
                                    v
+-------------------------------------------------------------------------+
|                  2. 技能与执行层 (Skill Layer)                          |
|         标准 Agent Skills (ZCode, Claude Code, AGY 规范)                |
|                                                                         |
|  - 信息采集引擎 (scripts/harvester): 多平台信源抓取与解析               |
|  - 信源鉴别器 (skills/source-evaluator): 三层 Sieve 过滤情绪与政治噪声   |
|  - 话语与分析技能 (未来规划): 仅挂载底层知识作为上下文进行逻辑推导       |
+-------------------------------------------------------------------------+
```

---

## 📚 知识库索引 (Open Knowledge Format v0.2)

知识库主索引请参阅 [`knowledge/index.md`](./knowledge/index.md)。

| 领域 ID | 领域名称 | 包含核心概念 | 状态 | 规范目录 |
| :--- | :--- | :--- | :--- | :--- |
| **`anthropoid-lifecycle`** | 人猿生命周期控制与年龄阶段宿命论 | • 本体定义与边界<br>• 纽加滕社会时钟与35岁门槛现象学<br>• 阿什比必要多样性定律与流水线死锁<br>• 异步事件驱动状态机与成人神经发生<br>• 实物期权价值与过早锁定经济学<br>• 斯宾塞信号模型与技能掌握分离<br>• 全景监狱与习得性无助内化机制<br>• 非线性高成就轨迹实证案例库<br>• 东亚社会结构性代际创伤、单向孝道异化与青年行为防御机制深度调查报告 | `active` | [`knowledge/anthropoid-lifecycle/`](./knowledge/anthropoid-lifecycle/index.md) |
| **`labor-system`** | 劳动制度设计与年龄性制度门槛 | • 中国劳动制度年龄门槛体制分析<br>• 全球反年龄歧视法规比较研究（ADEA/欧盟） | `active` | [`knowledge/labor-system/`](./knowledge/labor-system/index.md) |
| **`cognitive-bias`** | 认知偏差与生命周期控制话语可说服性机制 | • 可用性启发式与同辈比较焦虑放大<br>• 现状偏误、损失厌恶与社会证明瀑布<br>• 双曲时间折现失真与强制短视<br>• 诉诸虚假全知权威（“请大佛讲大道理”）<br>• 潘格罗斯范式与制度辩护理论<br>• 诉诸虚假全知权威跨领域 36 大实证反例库<br>• “笑哭与捂脸”符码霸权与低信噪比高危标记<br>• “理论上”双向免责陷阱与不可证伪性逃逸<br>• 宏大实体寄生与“嘉豪”图腾附魅（低信噪比三联煞终章）<br>• “本来”先验目的论谬误与实践可塑性 | `active` | [`knowledge/cognitive-bias/`](./knowledge/cognitive-bias/index.md) |
| **`innovation-economics`** | 创新经济学与多样性组合论 | • 探索-利用权衡与多臂老虎机模型<br>• 反脆弱性与非线性生涯杠铃策略 | `active` | [`knowledge/innovation-economics/`](./knowledge/innovation-economics/index.md) |
| **`comparative-global-models`** | 全球生命历程制度比较研究 | • 日本就活（Shukatsu）超刚性管线与失落世代<br>• 丹麦弹性安全（Flexicurity）黄金三角与终身教育<br>• 美国 Returnship 职业中断再入职生态 | `active` | [`knowledge/comparative-global-models/`](./knowledge/comparative-global-models/index.md) |

---

## 📂 Skills 目录索引

| Skill 名称 | 描述 | 中文规范 | 英文规范 | 状态 |
| :--- | :--- | :--- | :--- | :--- |
| **`source-evaluator`** | 内容分辨与多维筛查技能：三层 Sieve 架构淘汰政治键政与纯情绪杂音，提炼高信噪比实证原料与力工谬误特征卡片。 | [SKILL.md](./skills/source-evaluator/SKILL.md) | [SKILL.en.md](./skills/source-evaluator/SKILL.en.md) | ✅ 已就绪 |
| **`anti-laborer-output`** | 话语生成与解构技能（AI Agent 执行规范）：前置 Matt 风格 Step 0 盘问探底（Grill-Me）压测决策树前沿；依托知识库主索引【言论症状与知识库靶点速查路由矩阵】直达实证锚点；通过确定性工序与双遍质检门禁，生成无反调情绪、高信息密度的理性回应。 | [SKILL.md](./skills/anti-laborer-output/SKILL.md) | [SKILL.en.md](./skills/anti-laborer-output/SKILL.en.md) | ✅ 已就绪 |


---

## 📜 参与规范

欢迎有严谨科学素养与工程哲学的研究者共同完善本技能库。贡献内容时请务必注意：
1. 恪守客观、实证、非攻击性的学术与工程语调；
2. 知识库必须严格遵循 Google Open Knowledge Format (OKF v0.2) 规范；
3. 严禁在知识库中混合辩论生成模板或情绪化内容；
4. 任何新增或修改的文档必须同时提供中英文对称版本；
5. 遵循绝对路径白名单规范更新 `.gitignore`。

