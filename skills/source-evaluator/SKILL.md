---
name: source-evaluator
description: Evaluate and filter raw text, discussion threads, or search results to extract high-signal materials for anti-laborer skills. Trigger when evaluating source material, assessing signal-to-noise ratio, filtering ideological or emotional noise, or extracting anti-intellectual fallacies.
---

# Source Evaluator (内容分辨与高信噪比提炼技能)

[English Version](./SKILL.en.md) | [中文版本](./SKILL.md)

---

本技能旨在执行严格的**多级信噪比筛查（Multi-Stage Sieve）**，从广泛的检索源与原始文本中剔除意识形态键政、情绪化谩骂以及缺乏事实的低维噪音，精准提炼出具有实证价值或典型反智/力工表征的高质量原料。

> [!IMPORTANT]
> ### 核心法则：拒绝情绪对立，坚持技术理性
> 在执行内容分辨与解构时，严禁代入“为了唱反调而唱反调”的逆反情绪。面对各类言论，始终以**信息论、控制论、运筹学及第一性原理**作为唯一度量衡。

---

## 核心流程 (The Sieve Workflow)

执行内容评定时，按顺序完成以下四个阶段。各阶段必须达到明确的**完成准则 (Completion Criterion)**：

### 阶段 1：广度输入预处理 (Ingestion & Query Expansion)
1. 接收候选原始文本、网页片段或搜索结果流。
2. 运行本地轻量级筛查工具进行初步规则扫描：
   ```bash
   python3 skills/source-evaluator/scripts/filter.py --text "<候选文本>"
   ```
- **完成准则**：候选文本已完成基本字符清洗，获得基础信噪比初始快照。

### 阶段 2：L1 快速硬拦截 (L1 Fast-path Hard-Cut)
1. 检查文本是否命中以下**一票否决项**：
   - 带有政治阵营站队、政治讽刺标签（如公知、粉红、神友、殖人、润人等）；
   - 包含密集人身攻击、粗俗脏话或纯虚无主义发泄；
   - 缺乏具体工程/现实议题，纯属立场对冲与宏大叙事构陷。
2. 若命中任意一项：**立即丢弃并标记为 `REJECT_L1_HARD_CUT`，禁止展开进一步反驳或推理，节约算力与认知负荷**。
- **完成准则**：所有意识形态与纯情绪杂音在 L1 层全部淘汰出局，未流入下阶段。

### 阶段 3：L2 信噪比与逻辑架构门禁 (L2 SNR & Structural Gate)
1. 参照 [评定细则 (RUBRIC.md)](./RUBRIC.md) 评估文本的论证结构：
   - 是否存在可检验的事实陈述或量化指标？
   - 是否存在“以手段替代目的”、“盲目崇尚机械低效耗能”的力工思维表征？
   - 情绪修辞占比是否压倒了有效信息？
2. 若文本缺乏事实支点且仅充斥主观臆断，判定为 `REJECT_L2_SNR_GATE` 并淘汰。
- **完成准则**：过滤后的候选集仅包含“具备实证价值的内容”或“具备明确逻辑谬误靶点、可被科学解构的力工言论”。

### 阶段 4：L3 结构化抽取 (L3 ExtractionCard Generation)
1. 对通过筛选的有效原料，生成标准的 **ExtractionCard**：
   - **Target Fallacy**：明确指出其触犯的力工/反智认知谬误（如手段目的倒置、反抽象偏见）；
   - **Extracted Claim**：抽离出其核心论据陈述；
   - **Scientific Domain**：指定对应的科学与工程解构学科（如系统工程学、运筹优化、信息熵）；
   - **Deconstruction Angle**：提供客观、理性、去情绪化的第一性原理反驳切入点。
- **完成准则**：输出完整、字段齐备且符合规范的 JSON 或 Markdown ExtractionCard。

---

## 辅助资源与参考规约

- [评定细则与谬误分类表 (RUBRIC.md)](./RUBRIC.md)：包含力工思维四维分类学与高信噪比量化判定标准。
- [自动化过滤脚本 (scripts/filter.py)](./scripts/filter.py)：提供无第三方依赖的快速正则筛查与 CLI 评定接口。
