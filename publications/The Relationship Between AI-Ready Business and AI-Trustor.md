## AI-Ready Business 与 AI-Trustor 的关系

### 核心定位关系
- **AI-Trustor（AI 中介信任）**：是 IAIGEO 的**核心研究命题与应用系统**（Research Thesis → Applied System）。  
  定义：当 AI 搜索参与品牌、供应商与技术方案判断时，AI 输出成为信息检索与商业信任之间的**新型中介**。它由检索、来源选择、事实组织与生成式回答共同形成的信任中介机制。

- **AI-Ready Business**：是 IAIGEO 的**技术架构产品**（Technical Architecture），聚焦把传统企业数字资产转化为**机器可读（AI-readable）**的基础设施。

### 两者如何协同
| 维度 | AI-Trustor | AI-Ready Business | 关系说明 |
|------|------------|-------------------|----------|
| **层级** | 信任机制与战略目标 | 基础数字资产架构 | AI-Ready 是实现 AI-Trustor 的**基础设施前提** |
| **作用** | 让 AI 成为“中立可信的推荐中介” | 让企业内容被 AI “读得懂、抓得到、信得过” | 没有 AI-Ready 的结构化资产，AI-Trustor 难以生效 |
| **落地形态** | 技术白皮书投喂、高权重节点分发、语义偏见纠偏、Prompt 话术包等 | AI-Ready Landing Page、llms.txt、Schema、低熵事实分块等 | AI-Ready 提供“可被信任的源”，AI-Trustor 负责“让 AI 选择并背书这个源” |
| **时间节奏** | 可做 72 小时闪电部署（临门一脚）或年度长效守卫 | 标准 48 小时交付落地页 | 两者可组合：先建 AI-Ready 基础，再叠加 AI-Trustor 加速信任闭环 |

**简单比喻**：  
AI-Ready Business 是把企业变成“AI 愿意读、能读懂的标准教材”；  
AI-Trustor 是让 AI 把这本教材当成“中立权威证言”，在采购决策中主动推荐你。

两者共同服务于 IAIGEO 的终极目标——帮助跨境 B2B 企业在生成式搜索中获得**优先推荐权与信任背书**。

---

## AI-Ready Business 完整技术规格清单

根据官网 AI-Ready 页面公开的硬核规格，整理如下：

### 1. 语义与结构层
- **Semantic HTML5**：100% 结构化语义，无垃圾嵌套，机器可读 + 人类可感
- **Schema.org JSON-LD**：支持 Organization、Service、FAQ、Specialist 等实体绑定
- **AEO Direct Answer Blocks**：采用低熵事实分块（Low-Entropy Fact Chunk）和答案优先的 FAQ 排版

### 2. AI 爬虫与导航层
- **AI Crawler Configuration**：专门针对 OpenAI（GPTBot）、Anthropic、Perplexity 的协议调优
- **AI 通行证文件**：
  - 优化的 `llms.txt`
  - 优化的 `robots.txt`
  - `sitemap.xml`
- 主动向 AI 引擎示意“这里有最精准的业务事实，请直接抓取”

### 3. 性能与部署层
- **Edge-Native Deployment**：默认托管至 Vercel / Cloudflare 边缘节点
- 追求 100 分 Lighthouse 体验
- 静态高性能页面，支持快速 CDN 加速

### 4. 内容与实体层（与其他概念协同）
- 低熵事实分块（直接对应 Low-Entropy Fact Chunk）
- 权威实体绑定（降低 AI 幻觉）
- 语义对齐架构（支持 Cross-Lingual Semantic Alignment）
- SEO Heading 优化（兼容传统搜索）

### 5. 交付与服务规格
- **交付模式**：80% 标准化代码模板 + 20% 业务实体个性化配置
- **交付周期**：典型 48 小时上线
- **定价档位**：
  - 主推款 AI-Ready Business Landing Page：$199–399 / ¥1,500–3,000
  - 进阶款（含 AI Visibility Setup）：$499–999 / ¥3,000–7,000（额外含 30 个目标问题基准报告）

### 6. 明确不包含 / 不承诺的部分
- 不保证大模型 100% 推荐或引用
- 不控制第三方 AI 平台的索引与生成结果
- 传统大型官网全面重构需另行评估（落地页可作为“AI 特使页面”独立部署）

---

**总结**：  
AI-Ready Business 提供**可读、可抓、可信**的基础架构；  
AI-Trustor 在此基础上进一步构建**AI 中介信任与优先推荐权**。  
技术规格已高度产品化，可直接支撑 Semantic Micro-Carving、Low-Entropy Fact Chunk 与 Cross-Lingual Semantic Alignment 的落地。
