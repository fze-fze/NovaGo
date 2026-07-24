# NovaGo alignment QA

状态：完成

验收视口：1710×869（桌面端）、390×844（移动端）

## 通过项

- Hero eyebrow 已删除；`#top .eyebrow` 数量为 0。
- Hero facts 文案准确：
  - Target User / New to NUS
  - Focus / A short stay
  - Advantage / Connected service ecosystem
- 六个 `.section-label` 对齐一致：
  - 桌面端均为 `1470.6 × 44px`，左边界 `x=119.7px`
  - 移动端均为 `346 × 38px`，左边界 `x=22px`
  - 移动端序号均为 `38 × 38px`，标题起点均为 `x=73px`
- 七个 `.kicker` 层级一致且不拥挤：
  - 桌面端均为 `13px / 30px`
  - 移动端均为 `11px / 28px`
  - “CONCEPT SYNTHESIS” 的竖向强调线、留白与其他 kicker 一致
- 五个原始概念名（Settly、EZPAY、BorrowNest、NUS Nexus、UniFlow）均为 `17px / 20.4px`，桌面端和移动端基线一致。
- 页面级横向溢出为 0：两种视口下 `document.scrollWidth === viewport width`。
- 桌面端视觉检查未见裁切、错位或层级回退。

## 备注

- 移动端 journey line 是预期的横向滚动区：容器宽 `346px`，内容宽 `759px`，`overflow-x: auto`；它不会造成页面级横向溢出。
- 移动端 hero facts 的标签和值保持统一 `12px` 间距。较长的 “Connected service ecosystem” 仍完整显示。
- Final Prototype 手机模型在 390px 视口右侧有约 3px 的装饰性贴边，但被所在容器控制，未扩大页面宽度。

简短结论：本轮指定的文字、主标题栏、kicker 与五个概念名均已按相同层级统一；桌面端和移动端均无页面级溢出或明显回归。

不确定项：未测试中间断点（391–1709px）以及真实触控横向滑动手感。

建议主代理下一步：可直接进入发布；发布后再对生产 URL 做一次桌面端与手机端冒烟检查。
