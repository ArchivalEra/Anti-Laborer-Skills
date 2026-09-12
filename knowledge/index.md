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
    description: 对以“什么年龄做什么事”为借口的广义生命周期型控制、社会时钟规训与方差压制行为的系统工程学、控制论与认知科学知识库。
  - id: labor-system
    name: Labor System Design & Institutional Age Gates
    path: knowledge/labor-system/
    description: 劳动制度设计、年龄歧视立法比较与强制线性流水线的制度经济学分析。
  - id: cognitive-bias
    name: Cognitive Biases & Persuasion Mechanics of Lifecycle Control
    path: knowledge/cognitive-bias/
    description: 行为经济学与认知心理学视角下的"人猿生命周期控制"话语可说服性机制：可用性启发式、损失厌恶与双曲折现。
---


# 知识库索引 (Open Knowledge Format v0.2)

本知识库基于 Google 发布的 **Open Knowledge Format (OKF v0.2)** 规范构建，旨在建立系统化、可被人类学者与自主智能体（AI Agents）共同消费、高可信度且严格版本化的领域知识体系。

## 架构解耦原则 (Decoupling Principle)

本仓库的核心工程设计理念是 **知识归纳（Knowledge Ingestion & Synthesis）与行动/话语生成（Action & Dialogue Generation）的绝对解耦**：

1. **`knowledge/`（知识层）**：
   - 遵从 OKF v0.2 规范。
   - 存储客观、经过同行评审、具备统计数据与数学证明支持的领域事实、本体论模型与控制论机制拆解。
   - **严禁**掺杂任何话术生成模板、辩论提示词、对抗性话语或主观反调情绪。知识库必须始终维持冷静、学术、无偏的系统工程中立性。

2. **`skills/`（行动与技能层）**：
   - 仅负责调度具体的执行逻辑（如多源采集解析 `harvester`、信源信噪比评估 `source-evaluator` 等）。
   - 未来若需构建分析型或评判型技能，技能仅将 `knowledge/` 作为只读上下文挂载，严禁反向污染底层知识库本体。

## 知识领域目录 (Domains)

| 领域标识 (Domain ID) | 中文名称 | 核心学科支柱 | 状态 | 规范目录 |
| :--- | :--- | :--- | :--- | :--- |
| `anthropoid-lifecycle` | 人猿生命周期控制与年龄阶段宿命论 | 控制论、运筹学、认知神经科学、社会时钟社会学 | `active` | [`knowledge/anthropoid-lifecycle/`](./anthropoid-lifecycle/index.md) |
| `labor-system` | 劳动制度设计与年龄性制度门槛 | 制度经济学、比较劳动法、政策分析 | `active` | [`knowledge/labor-system/`](./labor-system/index.md) |
| `cognitive-bias` | 认知偏差与生命周期控制话语可说服性机制 | 行为经济学、认知心理学、前景理论 | `active` | [`knowledge/cognitive-bias/`](./cognitive-bias/index.md) |
| `innovation-economics` | 创新经济学与多样性组合论 | 创新经济学、复杂系统理论、多臂老虎机 | `active` | [`knowledge/innovation-economics/`](./innovation-economics/index.md)

### anthropoid-lifecycle 概念注册表（完整）

| 概念 ID | 概念名称 | 文件 |
| :--- | :--- | :--- |
| `definition` | 人猿生命周期控制的严格本体论定义 | `anthropoid-lifecycle/definition.md` |
| `social-clock-phenomenology` | 社会时钟现象学与制度门槛分析 | `anthropoid-lifecycle/social-clock-phenomenology.md` |
| `cybernetics-variance-suppression` | 控制论方差压制与流水线死锁 | `anthropoid-lifecycle/cybernetics-variance-suppression.md` |
| `asynchronous-lifecourse-model` | 异步事件驱动生命历程模型 | `anthropoid-lifecycle/asynchronous-lifecourse-model.md` |
| `human-capital-option-value` | 人力资本实物期权价值与过早锁定的经济学代价 | `anthropoid-lifecycle/human-capital-option-value.md` |
| `signaling-vs-mastery` | 斯宾塞信号模型与真实技能掌握的分离 | `anthropoid-lifecycle/signaling-vs-mastery.md` |
| `internalization-mechanisms` | 内化机制：全景监狱与习得性无助 | `anthropoid-lifecycle/internalization-mechanisms.md` |
| `late-bloomer-empirical` | 非线性高成就轨迹实证案例库 | `anthropoid-lifecycle/late-bloomer-empirical.md` |

### labor-system 概念注册表（完整）

| 概念 ID | 概念名称 | 文件 |
| :--- | :--- | :--- |
| `china-institutional-gates` | 中国劳动制度年龄性制度门槛体制分析 | `labor-system/china-institutional-gates.md` |
| `global-age-discrimination-law` | 全球年龄歧视法规比较研究 | `labor-system/global-age-discrimination-law.md` |

### cognitive-bias 概念注册表（完整）

| 概念 ID | 概念名称 | 文件 |
| :--- | :--- | :--- |
| `availability-heuristic` | 可用性启发式与同辈比较焦虑的放大机制 | `cognitive-bias/availability-heuristic.md` |
| `status-quo-loss-aversion` | 现状偏误与损失厌恶：年龄门槛话语的顺应性制造 | `cognitive-bias/status-quo-loss-aversion.md` |
| `temporal-discounting` | 时间折现失真与强制加速：为何生命周期控制令人高估短期成本 | `cognitive-bias/temporal-discounting.md` |

### innovation-economics 概念注册表（完整）

| 概念 ID | 概念名称 | 文件 |
| :--- | :--- | :--- |
| `exploration-exploitation` | 探索-利用权衡与宏观创新能力 | `innovation-economics/exploration-exploitation.md` |
| `antifragility-nonlinear-career` | 反脆弱性与非线性生涯路径 | `innovation-economics/antifragility-nonlinear-career.md` |

## 知识库治理与检验规范

- **单概念原子性（Concept Atomicity）**：每个概念文件独立承载单一学术命题或控制论机制。
- **可证伪与溯源（Provenance & Falsifiability）**：所有概念必须具备 `sources` 属性，标明权威论文、法条、调查数据或信源采样。
- **双语对齐（Bilingual Parity）**：遵循仓库硬性约束，每个 `.md` 文件必须严格配备对应的 `.en.md` 英文版本。

