# NovaGo typography QA

Status: Verified — 层级与字体升级已实施并通过计算样式核验 + 生产构建。

## 本轮改动（编辑感衬线大标题 + 无衬线正文）

- **字体加载**：`app/layout.tsx` 用 `next/font/google` 自托管 **Fraunces**（可变，`SOFT`+`opsz` 轴）作大标题、**Inter**（可变）作正文/标签/按钮/导航；注入 `--font-serif` / `--font-sans` 变量到 `<html>`。构建期内联，无外部请求、无布局抖动。
- **token 阶梯**（`globals.css :root`）：display `clamp(48,6.2vw,84)`、新增 h2 `clamp(32,4.2vw,54)`、h3 22、lead 21、body 16.5、label 12.5。h1/h2 字距放宽到 -0.02/-0.015em（衬线体不宜过紧）。所有非整数字重（620/650/750/800）改为 400/500/600/700。
- **标签收敛**：`.section-tag` 去掉 navy 实心底块 → 无底色 + accent 蓝 + 前导短横线 eyebrow；深色区块用浅蓝 `#8db4ff`。`.subsection-label` 对齐同款。
- **配色精修**：caption `#5f5e5a`（暖灰）→ `#64748b`（冷灰）；深色小字 caption-inverse `#aeb7c6` → `#b7c2d6`。主色 navy/蓝/五服务色未动。

## 浏览器实测（desktop 1280，computed styles）

- h1 = Fraunces 79.4px / 500；h2 = Fraunces 53.8px / 500；h3 = Inter 22px / 600；lead = Inter 21px / 400 —— 层级阶梯清晰（h1 > h2 > h3 ≥ lead > body）。
- `.section-tag` 背景 `rgba(0,0,0,0)`（无底块）、文字 accent 蓝；深色区块 `.research .section-tag` 文字 `rgb(141,180,255)` 浅蓝，在 navy 上清晰可读；`::before` 短横线存在。
- `.research` / `.evaluation` 背景仍为 navy `rgb(11,27,58)`；caption/footer 文字为冷灰 `rgb(100,116,139)`。
- `.final h2 em` 强调蓝保留。
- 页面级横向溢出：无（`scrollWidth === innerWidth`）。

## 构建

- `npm run build` 通过；`next/font` 在 vinext/Cloudflare 目标下自托管两款字体，无需回退到 `<link>` 方案。

## 待补（非阻塞）

- 移动端 375 视口逐段视觉复检（本轮预览工具在下折内容截图返回空白，未能逐段目视；computed styles 与桌面首屏已确认）。
- 生产 URL 发布后做一次桌面/手机冒烟。
