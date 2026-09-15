---
name: phantom-authority-evaluator
description: Ingest and evaluate input text exhibiting "Appeal to Phantom Authority" (请大佛讲大道理). Identify authority totems, extract shielded engineering or institutional defects, map real-world root causes, compute Thought-Termination Index (TTI), and emit structured PhantomAuthorityCard data without generating counter-arguments.
---

# Phantom Authority Evaluator (诉诸虚假全知权威输入评定技能)

[English Version](./SKILL.en.md) | [中文版本](./SKILL.md)

---

本技能是专门针对**“请大佛讲大道理”**（即通过攀附不存在的、被神化的抽象全知权威，将产品缺陷、制度落后或现实劣解强行固化为“必然最优”的输入型认知病灶）的分析与评定技能。

> [!IMPORTANT]
> ### 架构边界红线：输入分析与输出生成彻底解耦
> 本技能属于**纯输入端结构化解析引擎**。
> - **严格职责**：模式扫描、图腾识别、缺陷抽离、组织归因映射、计算思维终止指数（TTI）并输出标准化 `PhantomAuthorityCard`。
> - **严格禁区**：**严禁生成任何辩驳文案、反讽对话、回怼话术或输出文本**。应对与沟通话术必须交由专门的输出技能（如 `anti-laborer-output`）独立承接。

---

## 核心分析流程 (The Evaluation Workflow)

执行文本解析时，按以下五个阶段顺序执行，各阶段必须满足对应的**完成准则 (Completion Criteria)**：

### 阶段 1：模式扫描与初步识别 (Surface Regex & Lexical Scan)
1. 接收候选文本输入。
2. 运行随附的轻量级解析工具进行图腾标记扫描：
   ```bash
   python3 skills/phantom-authority-evaluator/scripts/parse_phantom.py --text "<输入文本>"
   ```
3. 检查扫描结果中的 `has_phantom_authority` 标识与命中的权威原型：
   - `industrial_omniscience` (工业大厂全知神话)
   - `historical_heritage` (历史传统神圣化)
   - `institutional_omniscience` (宏大体制全知论)
- **完成准则**：获得文本的原型命中分布及基础 `thought_termination_index` 初值。

### 阶段 2：实体双向抽离 (Dual-Entity Extraction)
从文本中剥离并解耦两个关键实体：
1. **虚构图腾 (`phantom_totem`)**：文本所攀附的、未经证实的抽象全知实体（例如：“万亿巨头的几万名顶尖工程师”、“上下五千年的古代御医”、“顶层全知智囊团”）。
2. **被掩饰缺陷 (`shielded_defect`)**：该图腾所保护的具象产品缺陷、落后工艺、低效规章或体验劣化点（例如：“某品牌手机劣质调光/发热卡顿”、“缺乏双盲毒理验证的传统偏方”、“冗余低效的审批流”）。
- **完成准则**：成功分离“权威光环外壳”与“物理/工程缺陷核心”。

### 阶段 3：真实成因解构与知识库映射 (Root Cause Mapping)
依据 [评定细则 (RUBRIC.md)](./RUBRIC.md) 及 OKF 知识库理论（[appeal-to-phantom-authority](../../knowledge/cognitive-bias/appeal-to-phantom-authority.md) 与 [system-justification-panglossian](../../knowledge/cognitive-bias/system-justification-panglossian.md)），将表面缺陷映射至现实物理、经济或组织学归因：
- `cost_bom_compromise`：BOM成本控制、毛利率要求或产线良率妥协；
- `organizational_silo`：部门KPI壁垒、部门间利益分割与自保合规；
- `path_dependency_legacy`：历史模具/产线设备未摊销、向下兼容包袱；
- `historical_epistemic_gap`：历史特定时期前科学时代的认知与检验工具盲区；
- `principal_agent_distortion`：委托-代理信息损耗与合规免责倒逼。
- **完成准则**：缺陷获得明确的客观工程/组织归因，剔除所有“高瞻远瞩”、“必有深意”等虚构预设。

### 阶段 4：思维终止指数量化评估 (TTI & Epistemic Scoring)
1. 参照 [RUBRIC.md](./RUBRIC.md) 评估文本的思维终止指数（Thought-Termination Index, TTI, 0.0 - 1.0）：
   - 若文本 100% 依赖“大厂/古人怎么可能想不到”堵死逻辑论证，无任何物理参数或实验数据，评定为 `TTI >= 0.7`；
   - 若包含局部技术探讨但核心仍诉诸权威，评定为 `0.4 <= TTI < 0.7`；
   - 若提供了具体工程师姓名、专利号、双盲临床或物理实测，评定为 `TTI < 0.3`（非虚假权威）。
2. 信噪比裁定：
   - `TTI >= 0.7` 判定为 `FLAG_PHANTOM_AUTHORITY_LOW_SNR`，作为认知病灶案例归档，严禁纳入有效事实证据池。
- **完成准则**：确定量化 TTI 分值并给出信噪比等级。

### 阶段 5：生成结构化卡片 (Emit PhantomAuthorityCard)
将上述分析结果打包为标准化 JSON 数据结构，禁止附加任何对话式总结：

```json
{
  "card_type": "PhantomAuthorityCard",
  "version": "1.0",
  "archetype": "industrial_omniscience | historical_heritage | institutional_omniscience",
  "phantom_totem": "提取出的虚构图腾描述",
  "shielded_defect": "被掩饰的具体缺陷或劣解",
  "mapped_root_cause": "cost_bom_compromise | organizational_silo | path_dependency_legacy | historical_epistemic_gap | principal_agent_distortion",
  "root_cause_explanation": "基于物理学、组织工程学或演化生物学的客观真实原因",
  "thought_termination_index": 0.85,
  "snr_verdict": "FLAG_PHANTOM_AUTHORITY_LOW_SNR",
  "knowledge_refs": [
    "knowledge/cognitive-bias/appeal-to-phantom-authority.md",
    "knowledge/cognitive-bias/system-justification-panglossian.md"
  ]
}
```
- **完成准则**：输出符合 JSON Schema 规范的纯数据对象。

---

## 关联文件与规约索引

- [评定细则 (RUBRIC.md)](./RUBRIC.md)：权威原型矩阵与真实归因映射详表。
- [扫描解析脚本 (scripts/parse_phantom.py)](./scripts/parse_phantom.py)：开箱即用的正则与词法特征抽取工具。
- [知识库：诉诸虚假全知权威](../../knowledge/cognitive-bias/appeal-to-phantom-authority.md)：认知闭合需求与权威谬误机制。
- [知识库：潘格罗斯范式与制度辩护](../../knowledge/cognitive-bias/system-justification-panglossian.md)：有限理性与组织摩擦理论。
