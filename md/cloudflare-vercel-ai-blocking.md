### 路径：[www.iaigeo.com/md/cloudflare-vercel-ai-blocking.md](https://www.iaigeo.com/md/cloudflare-vercel-ai-blocking.md)

# 解决 Cloudflare + Vercel/GitHub Pages 部署中 AI 爬虫提示“网站被屏蔽”的技术实证

在进行生成引擎优化（GEO）的实际操作中，很多站长会遇到一个致命的“AI收录黑洞”现象：网站在传统搜索引擎有索引，但在 ChatGPT Search、SearchGPT 或 Perplexity 中完全隐形，甚至后台显示“可能被屏蔽”或“无法访问”。

## 1. 核心病灶：小云朵点灰后的 SSL 握手失败与缓存脱节
通过 IAIGEO 研究中心的深度排查，该错误通常发生在将 Cloudflare 的安全代理（即“橙色小云朵”改为“灰色仅限DNS”）之后。

- **源站证书未接管**：点灰小云朵意味着移除了 Cloudflare 的边缘 SSL 证书。如果此时 Vercel 或 GitHub Pages 的自定义域名（Custom Domain）未能及时重新签发并生效源站的 SSL 证书，AI 爬虫（如 `OAI-SearchBot`）访问 `https://` 时就会触发 SSL/TLS 握手失败。
- **爬虫安全一刀切**：出于安全机制，AI 搜索引擎绝对不会收录和展示任何存在证书配置错误的网页，从而在前端直接判定该站“被屏蔽”。

## 2. 24小时内快速恢复 AI 收录的极简配置指南
要彻底打通 AI 爬虫的访问链路，无需复杂的机器人防行设置，只需确保以下极简通道的绝对干净：

### A. 检查并确立源站 SSL 状态
在无痕浏览器中直接输入网址，确保地址栏的“安全锁头”标志完全正常。此时证书颁发机构应已成功切换为 Vercel（Let's Encrypt）或 GitHub Pages 的原生证书，而非 Cloudflare。

### B. 根目录 robots.txt 显式放行
在根目录下配置最清爽的规则，向主流 AI 蜘蛛递交“通行证”：
```text
User-agent: OAI-SearchBot
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: *
Allow: /