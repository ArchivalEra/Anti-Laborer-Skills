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
  - id: innovation-economics
    name: Innovation Economics & Diversity Portfolio
    path: knowledge/innovation-economics/
    description: 复杂系统视角下的探索-利用权衡、知识溢出与反脆弱性生涯设计。
  - id: comparative-global-models
    name: Global Comparative Lifecourse Models
    path: knowledge/comparative-global-models/
    description: 全球生命历程制度比较研究：从日本就活超刚性流水线到北欧弹性安全制及美国回归实习机制。
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

## 🧭 言论症状与知识库靶点速查路由矩阵 (Symptom-to-Knowledge Diagnostic Matrix)

当用户或下游话语生成技能（如 `anti-laborer-output`）面对现实网络讨论中的具体言论时，可通过本矩阵直接将**日常生活化口号/症状**映射到知识库中对应的**底层客观概念文件与实证反例**，杜绝大模型盲猜与幻觉：

| 典型现实言论 / 症状表征 (Linguistic Symptom) | 底层病理机制与谬误本质 | 知识库对口概念文件 (Target OKF Concept) | 核心证据与实证案例 (Anchor & Cases) |
| :--- | :--- | :--- | :--- |
| **“像xx大厂几万工程师怎么可能没想到？”**<br>“上下五千年御医世家都这么开药，难道不如你懂？”<br>“上面大领导智囊团那么聪明，必然有深意” | 诉诸虚假全知权威（请大佛）<br>庞格罗斯式现状辩护<br>思维终止型套话与认知外包 | [`cognitive-bias/appeal-to-phantom-authority.md`](./cognitive-bias/appeal-to-phantom-authority.md)<br>[`cognitive-bias/system-justification-panglossian.md`](./cognitive-bias/system-justification-panglossian.md)<br>[`cognitive-bias/empirical-phantom-authority-cases.md`](./cognitive-bias/empirical-phantom-authority-cases.md) | • 36大跨领域实证反例库<br>• 案例 1: 苹果蝶式键盘 (执念与沉没成本)<br>• 案例 7: 波音 737 MAX MCAS (单一传感器死穴)<br>• 案例 19: 马兜铃酸肾病 (前现代认知工具盲区)<br>• 康威定律、有限理性与 Satisficing |
| **“什么年龄做什么事，35岁前不搞定就晚了”**<br>“三十不立，这辈子就彻底废了”<br>“大家都这个节奏，你凭什么觉得自己特殊” | 纽加滕社会时钟单轨规训<br>年龄阶段宿命论与控制论方差压制<br>将局部制度门槛泛化为生理规律 | [`anthropoid-lifecycle/social-clock-phenomenology.md`](./anthropoid-lifecycle/social-clock-phenomenology.md)<br>[`anthropoid-lifecycle/asynchronous-lifecourse-model.md`](./anthropoid-lifecycle/asynchronous-lifecourse-model.md)<br>[`anthropoid-lifecycle/late-bloomer-empirical.md`](./anthropoid-lifecycle/late-bloomer-empirical.md) | • 异步事件驱动生命历程状态机<br>• 成人神经发生 (Neurogenesis) 实证<br>• 晶体智力 (Crystallized Intelligence) 随年龄持续上升规律<br>• 非线性大器晚成实证案例库 |
| **“考公考编过了35岁人家看都不看你”**<br>“没了应届生身份，好单位大门全对你关死” | 劳动市场制度性年龄硬门槛<br>体制排斥性合规与特权身份锁定 | [`labor-system/china-institutional-gates.md`](./labor-system/china-institutional-gates.md)<br>[`labor-system/global-age-discrimination-law.md`](./labor-system/global-age-discrimination-law.md)<br>[`comparative-global-models/japan-shukatsu.md`](./comparative-global-models/japan-shukatsu.md) | • 中国劳动法“硬红线”制度成因剖析<br>• 全球反年龄歧视法案 (ADEA/欧盟雇佣平等指令) 对比<br>• 日本就活 (Shukatsu) 制度性疤痕实证 |
| **“吃得苦中苦，方为人上人”**<br>“别想着投机取巧，苦熬出来的才是真正的基本功”<br>“机器干的不算本事，手工硬磨才是敬业” | 手段与目的颠倒<br>机械高耗能信号崇拜<br>控制论流水线死锁 | [`anthropoid-lifecycle/signaling-vs-mastery.md`](./anthropoid-lifecycle/signaling-vs-mastery.md)<br>[`anthropoid-lifecycle/cybernetics-variance-suppression.md`](./anthropoid-lifecycle/cybernetics-variance-suppression.md)<br>[`anthropoid-lifecycle/definition.md`](./anthropoid-lifecycle/definition.md) | • 斯宾塞信号理论：机械吃苦作为廉价忠诚信号<br>• 阿什比必要多样性定律 (Law of Requisite Variety)<br>• 人猿生命周期控制本体论边界定义 |
| **“你现在换行业/换赛道，以前积累全沉没了”**<br>“年轻时要一条道走到黑，不要东一榔头西一棒子” | 损失厌恶与过早锁定陷阱<br>探索-利用权衡失衡 | [`anthropoid-lifecycle/human-capital-option-value.md`](./anthropoid-lifecycle/human-capital-option-value.md)<br>[`innovation-economics/exploration-exploitation.md`](./innovation-economics/exploration-exploitation.md)<br>[`innovation-economics/antifragility-nonlinear-career.md`](./innovation-economics/antifragility-nonlinear-career.md) | • 人力资本实物期权模型与等待价值<br>• 多臂老虎机 (Multi-Armed Bandit) 终身探索算法<br>• 塔勒布反脆弱杠铃策略 (Barbell Strategy) |
| **“外面世界哪有你想的那么好，大家都是这么过的”**<br>“就你清高？看看别人不都老老实实结婚生子还贷” | 可用性启发式偏差<br>从众瀑布与群体极化<br>全景监狱习得性无助内化 | [`cognitive-bias/availability-heuristic.md`](./cognitive-bias/availability-heuristic.md)<br>[`cognitive-bias/status-quo-loss-aversion.md`](./cognitive-bias/status-quo-loss-aversion.md)<br>[`anthropoid-lifecycle/internalization-mechanisms.md`](./anthropoid-lifecycle/internalization-mechanisms.md)<br>[`comparative-global-models/nordic-flexicurity.md`](./comparative-global-models/nordic-flexicurity.md) | • 特维尔斯基 & 卡尼曼可用性启发式模型<br>• 损失厌恶指数与社会证明瀑布<br>• 福柯全景敞视机制与塞利格曼习得性无助<br>• 丹麦 Flexicurity 终身安全网与再教育体系 |
| **“现在不把身体拼上去，以后连拼的机会都没有”**<br>“年轻吃苦叫吃苦，中年吃苦叫受罪” | 双曲时间折现失真<br>制度诱导型强制短视 | [`cognitive-bias/temporal-discounting.md`](./cognitive-bias/temporal-discounting.md)<br>[`innovation-economics/antifragility-nonlinear-career.md`](./innovation-economics/antifragility-nonlinear-career.md) | • 双曲贴现曲线与跨期选择非理性塌缩<br>• 生涯凸性回报与长期复利设计 |
| **“……😂 / [捂脸] / 🤣”**<br>“你认真的吗😂”<br>“笑死我了[捂脸]，建议多读点书” | 闲汉符号学霸权与低成本虚假优越感<br>犬儒理性免责护甲<br>时间零机会成本与极端断章取义 | [`cognitive-bias/cynical-emoji-superiority-marker.md`](./cognitive-bias/cynical-emoji-superiority-marker.md) | • 99%锁定为低智环境无产出闲汉与断章取义噪音<br>• FLAG_CYNICAL_EMOJI_SNR_COLLAPSE (信噪比归零)<br>• 斯洛特戴克《犬儒理性批判》与布迪厄符号暴力<br>• 处置铁律：直接硬拦截过滤，严禁消耗高价值算力与时间纠缠 |
| **“理论上这个需求两行代码就能改好，怎么排期要三天？”**<br>“理论上35岁前按部就班就能立足，模型这么完美你怎么做不到？”<br>“从理论上讲……（若打脸则甩锅：现实变量太多执行偏差，能怪理论吗）” | 不可证伪双向免责对冲<br>无下行风险声誉收割（廉价言辞）<br>真空球形鸡教条主义 | [`cognitive-bias/in-theory-hedging-trap.md`](./cognitive-bias/in-theory-hedging-trap.md) | • 绝代双骄之二：假学术文人免责护甲（对冲“笑哭/捂脸”）<br>• 波普尔不可证伪性与特设性拯救危机<br>• 塔勒布《非对称风险》(Skin in the Game) 道德风险与法兰克福《论扯淡》<br>• FLAG_IN_THEORY_UNFALSIFIABLE_HEDGE (要求给出证伪指标与责任承诺，无下行风险者直接过滤) |
| **“某国芯片卡脖子已破/大厂市值干崩全美，你挑刺产品是不是汉奸？”**<br>“我们大厂几万人怎么可能不如你懂？”<br>“A股某题材妖股天天连板，国家万亿产业布局，借势搞钱买房翻身懂不懂！” | 宏大实体寄生与神圣图腾投射（“嘉豪”本源）<br>股市题材与搞钱暴富逃避机制<br>恶性孝道婚房绞索下的自我破产与自尊代偿<br>马克思异化倒错（把压榨者奉为图腾） | [`cognitive-bias/macro-entity-parasitic-projection.md`](./cognitive-bias/macro-entity-parasitic-projection.md) | • 霍弗《狂热分子》：自我消融于神圣实体的代偿全能感<br>• 2026一线实证：打螺丝月入8000+且炒股真赚到钱（破除教师/记者廉价赤贫臆想）<br>• 暴发式确认偏误：把周期Beta误当个人神算Alpha；老一代索取胃口随收入飙升全盘吞噬剩余价值<br>• FLAG_MACRO_ENTITY_PARASITIC_PROJECTION (视作异星杂音，绝对零响应直接丢弃) |
| **“这事情本来就该这样，怎么搞得这么复杂？”**<br>“他本来可以做到完美的，都是外部在故意防爆/使坏！”<br>“女孩子本来就该细心懂事做家务大家闺秀，你们为什么这么暴躁？” | 先验目的论谬误（“本来”自卫结界）<br>长辈“大家闺秀/细心懂事”无偿家务与情感剥削创伤<br>耽美（BL）免剥削避难所与无意识心理硬壳<br>未入世群体认知悬浮（具备高度实践可塑性） | [`cognitive-bias/benlai-teleological-essentialism.md`](./cognitive-bias/benlai-teleological-essentialism.md) | • 上野千鹤子：父权制对女性无偿再生产劳动与情感劳动的残酷榨取<br>• 逃入耽美作为“彻底排斥女性肉身与家务奴役”的反剥削避难所<br>• 无意识心理防御机制：被迫借用长辈“本来”语法构建反向纯净道德盾牌<br>• 马克思《提纲》与“钱难赚屎难吃”实践脱敏（真上班后迅速回归理性）<br>• FLAG_BENLAI_ESSENTIALIST_TELEOLOGY (不对抗不侮辱，成本核算冷处理) |
| **“天下无不是之父母，百善孝为先！”**<br>“长辈说你几句怎么了？尊老爱幼懂不懂！”<br>“老人哪怕再不对也是你长辈，你敢反驳就是大不孝！” | 单向度宗族孝道异化与年龄特权霸权<br>伦理互惠契约的彻底崩塌<br>将老年群体既得利益与德行缺失神圣化<br>东亚高压共生体的情感勒索与债务控制 | [`anthropoid-lifecycle/east-asian-intergenerational-trauma-report.md`](./anthropoid-lifecycle/east-asian-intergenerational-trauma-report.md) | • **伦理互惠铁律：尊老的前提是老人确实好德行，爱幼的前提是孩子确实爱家庭**<br>• 先秦双向责任契约（父慈是子孝的绝对前提）被封建极权篡改为单向奴役<br>• 费孝通《乡土中国》与孙隆基《中国文化的深层结构》：债务工厂与未断奶病理<br>• 闲汉与腐女并非生来低智，实为老一辈代际暴力的第一线受创代偿产物<br>• FLAG_ASYMMETRIC_FILIAL_EXPLOITATION (坚决拆解单向年龄霸权，确立双向德行前置) |
| **“代码必须一行行纯手敲才有灵魂工匠精神，用AI就是偷懒投机取巧！”**<br>“反正有AI直接狂刷一键生成就行，学什么底层编译原理和数据结构，架构师全下岗！” | 技术卢德主义与偶然复杂度击键仪式感崇拜<br>认知完全外包与随机采样伪工程化（无状态机把控的Prompt祈祷力工） | [`cognitive-bias/ai-artisan-luddism.md`](./cognitive-bias/ai-artisan-luddism.md) | • 布鲁克斯《没有银弹》：解耦本质复杂度（系统拓扑）与偶然复杂度（键盘击键摩擦）<br>• 阿什比必要多样性定律与认知带宽再分配（生物神经元算力上移至形式化验证）<br>• 历史演进实证：从打孔机、手写汇编到 SQL 与 AI Agent 编排<br>• FLAG_AI_ARTISAN_LUDDISM / FLAG_PROMPT_PRAYING_LABORER |
| **“在电脑前敲键盘敲代码都是虚的泡沫，只有送外卖/进厂修车/下苦力才是真家伙！”**<br>“虚拟经济全是骗局，看得见摸得着的实物才算真本事与铁饭碗！” | 前现代朴素唯物主义与反抽象偏见<br>感官依赖陷阱（将价值局限于宏观低速质量位移）<br>否定非竞争性要素的万倍生产力乘数 | [`cognitive-bias/physicalist-matter-fetishism.md`](./cognitive-bias/physicalist-matter-fetishism.md) | • 香农信息论与热力学：信息即负熵（真正的生产力在于给混乱混沌注入低熵拓扑秩序）<br>• 罗默内生增长理论：物理竞争性客体 vs 非竞争性思想/代码的边际零成本万倍扩散<br>• 现代工业实证：五轴数控机床取代手工车床，调度算法决定外卖路线与电网金融中枢<br>• FLAG_PHYSICALIST_MATTER_FETISHISM |
| **“哪怕发呆也得在工位坐满12小时证明态度端正，晚上不走才叫有敬业心！”**<br>“大家都熬着你凭什么先走，走得早说明工作不饱和；日报周报必须写满五千字！” | 表演性工时与在场证明异化（古德哈特定律失效）<br>科层制管理能力退化与防御性伪工作<br>认知资源自我损耗（Ego Depletion）与重大工程缺陷率飙升 | [`cognitive-bias/performative-presenteeism.md`](./cognitive-bias/performative-presenteeism.md) | • 古德哈特定律：当工时变成考核目标，它就不再是有效度量指标<br>• 帕金森定律与格雷伯《狗屁工作》：形式主义看门人与管理充实感膨胀<br>• 软件工程实证统计：深夜疲劳使缺陷逃逸率与线上重大事故概率飙升 300%~500%<br>• FLAG_PERFORMATIVE_PRESENTEEISM |

## 知识领域目录 (Domains)

| 领域标识 (Domain ID) | 中文名称 | 核心学科支柱 | 状态 | 规范目录 |
| :--- | :--- | :--- | :--- | :--- |
| `anthropoid-lifecycle` | 人猿生命周期控制与年龄阶段宿命论 | 控制论、运筹学、认知神经科学、社会时钟社会学 | `active` | [`knowledge/anthropoid-lifecycle/`](./anthropoid-lifecycle/index.md) |
| `labor-system` | 劳动制度设计与年龄性制度门槛 | 制度经济学、比较劳动法、政策分析 | `active` | [`knowledge/labor-system/`](./labor-system/index.md) |
| `cognitive-bias` | 认知偏差与生命周期控制话语可说服性机制 | 行为经济学、认知心理学、前景理论 | `active` | [`knowledge/cognitive-bias/`](./cognitive-bias/index.md) |
| `innovation-economics` | 创新经济学与多样性组合论 | 创新经济学、复杂系统理论、多臂老虎机 | `active` | [`knowledge/innovation-economics/`](./innovation-economics/index.md) |
| `comparative-global-models` | 全球生命历程制度比较 | 比较社会学、比较劳动政策、制度分析 | `active` | [`knowledge/comparative-global-models/`](./comparative-global-models/index.md) |

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
| `east-asian-intergenerational-trauma-report` | 东亚社会结构性代际创伤、单向孝道异化与青年行为防御机制深度调查报告 | `anthropoid-lifecycle/east-asian-intergenerational-trauma-report.md` |

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
| `appeal-to-phantom-authority` | 诉诸虚假全知权威与认知外包：攀附不存在的大佛与思维终止机制 | `cognitive-bias/appeal-to-phantom-authority.md` |
| `system-justification-panglossian` | 制度辩护理论与庞格罗斯谬误：将现状妥协脑补为全局最优 | `cognitive-bias/system-justification-panglossian.md` |
| `empirical-phantom-authority-cases` | 诉诸虚假全知权威实证反例库：跨领域 36 大系统性失误与认知盲区 | `cognitive-bias/empirical-phantom-authority-cases.md` |
| `cynical-emoji-superiority-marker` | “笑哭与捂脸”的符码霸权：低成本虚假优越感与极低信噪比的高危特征标记 | `cognitive-bias/cynical-emoji-superiority-marker.md` |
| `in-theory-hedging-trap` | “理论上”的双向免责陷阱：不可证伪性逃逸与虚妄学术对冲 | `cognitive-bias/in-theory-hedging-trap.md` |
| `macro-entity-parasitic-projection` | 宏大实体寄生与图腾附魅：“嘉豪”本源与国家/企业/产业名的虚妄投射 | `cognitive-bias/macro-entity-parasitic-projection.md` |
| `benlai-teleological-essentialism` | “本来”的先验目的论谬误：脱离生产实践的温室预设与实践可塑性 | `cognitive-bias/benlai-teleological-essentialism.md` |
| `ai-artisan-luddism` | AI时代的“手搓原教旨”与“Prompt力工”双相病：技术卢德主义与认知盲区 | `cognitive-bias/ai-artisan-luddism.md` |
| `physicalist-matter-fetishism` | 物理实体拜物教与数字虚无主义：前现代物质直观经验论与反抽象偏见 | `cognitive-bias/physicalist-matter-fetishism.md` |
| `performative-presenteeism` | 表演性工时与在场证明力工：组织熵增、伪工作与防御性疲劳 | `cognitive-bias/performative-presenteeism.md` |


### innovation-economics 概念注册表（完整）

| 概念 ID | 概念名称 | 文件 |
| :--- | :--- | :--- |
| `exploration-exploitation` | 探索-利用权衡与宏观创新能力 | `innovation-economics/exploration-exploitation.md` |
| `antifragility-nonlinear-career` | 反脆弱性与非线性生涯路径 | `innovation-economics/antifragility-nonlinear-career.md` |

### comparative-global-models 概念注册表（完整）

| 概念 ID | 概念名称 | 文件 |
| :--- | :--- | :--- |
| `japan-shukatsu` | 日本就活制度（就職活動）：同步化超刚性招聘流水线的生成与后果 | `comparative-global-models/japan-shukatsu.md` |
| `nordic-flexicurity` | 北欧弹性安全制度（Flexicurity）：高流动性与强保障的协调机制 | `comparative-global-models/nordic-flexicurity.md` |
| `returnship-programs` | 回归实习计划（Returnship）：美国制度对职业中断者的重新接纳机制 | `comparative-global-models/returnship-programs.md` |

## 知识库治理与检验规范

- **单概念原子性（Concept Atomicity）**：每个概念文件独立承载单一学术命题或控制论机制。
- **可证伪与溯源（Provenance & Falsifiability）**：所有概念必须具备 `sources` 属性，标明权威论文、法条、调查数据或信源采样。
- **双语对齐（Bilingual Parity）**：遵循仓库硬性约束，每个 `.md` 文件必须严格配备对应的 `.en.md` 英文版本。

