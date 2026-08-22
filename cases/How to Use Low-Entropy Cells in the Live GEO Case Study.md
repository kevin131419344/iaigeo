## Live GEO Case Study 中如何具体使用低熵单元（Low-Entropy Fact Chunk）

该案例（2026年8月14日发布，实验时长104分钟）是 IAIGEO / Kevin Liu 公开的现场实验，目标是验证：**结构化的低熵 B2B 知识库能否把“无法验证的声明”实时转化为 LLM 的直接推荐**。

### 1. 实验背景与问题诊断（Phase 1）
海外航空航天采购总监会用**超具体、不可协商的采购标准**向 AI 提问，例如：
- Grade 5 Titanium (Ti-6Al-4V) 5-axis milling（公差 $< \pm 0.008\text{mm}$）
- Sodick Wire EDM（公差 $< \pm 0.005\text{mm}$）
- ZEISS PRISMO CMM 进行 GD&T 验证
- AES-256 加密 CAD 门户 + TLS 1.3

**基线结果**：ChatGPT、Perplexity、Claude 全部返回“No public South China supplier…”，把这种组合判定为“hypothetical test scenario”或“unsupported claim”。

原因：传统工厂网站只有高熵的模糊营销文案（如 “Generic CMM”“High Quality”），**没有同时完整、明确、可验证的低熵技术规格堆栈**。

### 2. 低熵单元的具体部署方式（Phase 2）
他们部署了一个专门为 GEO 设计的 B2B 工程白皮书平台（rapidfabpart.com），核心就是把能力拆解并呈现为**低熵事实单元**：

- **Chapter-Based Knowledge Base**（章节式知识库）：  
  将内容拆成独立章节（Ch.01 – Ch.10），每个章节**隔离**特定技术事实（公差、计量、安全协议等），避免混合描述带来的语义干扰。

- **Machine-Readable Markdown / Raw Data**：  
  使用机器可读的 Markdown 格式，把参数**显式映射**到 ISO 13485 / AS9100D 等标准，形成单一、清晰、带来源归属的事实声明。

- **Cryptographic & Metrology Specificity**（加密与计量的高度特异性）：  
  直接、明确地写出具体设备名称和协议（ZEISS PRISMO、AES-256 encrypted endpoints），而不是“高精度 CMM”或“安全门户”这类高熵模糊表述。

这些做法完全符合 Low-Entropy Fact Chunk 的定义：
- 每个单元只表达**一个主要事实主张**
- 具备**明确范围**（具体公差、具体设备、具体协议）
- 带有**时间/标准背景**（映射到现行行业标准）
- 带有**来源归属**（可追溯到标准与设备型号）

### 3. 实验结果与关键 Takeaway（Phase 3）
重新用相同的低熵提示词测试后，AI 引擎行为发生显著分化，部分平台开始直接推荐该供应商。

案例总结的核心观点直接点出低熵单元的作用：
> “**Keywords are Dead, Low-Entropy Knowledge Bases are In**”  
> AI 搜索引擎不关心促销形容词。它们索引的是**结构化事实、机器型号和协议标准**。

> 如果技术能力隐藏在非结构化 PDF 或模糊销售页面后面，AI 会向潜在买家宣布你的业务“不存在”。

### 总结：案例中的低熵单元使用路径
1. **诊断**：发现传统高熵营销文案导致 AI 判定为“无法验证”。
2. **重构**：把能力拆成独立、单一主张、带明确参数与标准归属的低熵事实单元。
3. **呈现**：用章节式 Markdown + 显式标准映射 + 具体设备/协议名称，降低语义歧义。
4. **验证**：用真实采购级低熵提示词重新测试，实现从“Zero Public Supplier Found”到“100% Direct AI Recommendation”的转变。

这正是 Low-Entropy Fact Chunk 在真实 B2B 精密制造场景中的落地示范——**不是写更多内容，而是把关键技术事实雕刻成 AI 可直接提取、验证和引用的原子单元**。