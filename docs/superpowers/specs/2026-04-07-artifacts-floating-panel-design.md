# Artifacts 浮动毛玻璃面板设计

## 概述

将 Artifacts 文件面板从占用聊天区域的分割面板改为固定定位的浮动毛玻璃面板，从右侧滑出显示。

## 背景

当前实现使用 `ResizablePanelGroup` 将聊天区域分割，面板展开时占用 40% 宽度。这种方式会压缩聊天区域，影响用户体验。

## 设计决策

| 属性 | 值 | 原因 |
|------|-----|------|
| 定位方式 | fixed | 相对于视口固定，滚动时位置不变，符合浮动面板预期 |
| 宽度 | min(40vw, 600px) | 自适应不同屏幕，超大屏幕设置上限 |
| 背景 | bg-background/80 backdrop-blur-md | 毛玻璃效果 |
| Z-Index | z-50 | 与现有 Sheet/Dialog 一致 |
| 动画 | translateX 300ms ease-in-out | 流畅的右侧滑入 |
| 遮罩 | 无 | 用户要求简洁 |

## 布局结构

```
┌─────────────────────────────────────────┐
│  Chat Area (100%)                       │
│  ┌────────────────────────────────────┐ │
│  │ Messages                           │ │
│  │                                    │ │
│  │         ┌──────────────────┐       │ │
│  │         │ Frosted Glass    │       │ │
│  │         │ Artifacts Panel  │       │ │
│  │         │ (slides from     │       │ │
│  │         │  right edge)     │       │ │
│  │         └──────────────────┘       │ │
│  └────────────────────────────────────┘ │
└─────────────────────────────────────────┘
```

## 样式规格

### 面板容器
```css
position: fixed;
right: 0;
top: 0;
bottom: 0;
width: min(40vw, 600px);
max-width: 600px;
min-width: 320px;
background: rgba(var(--background) / 0.8);
backdrop-filter: blur(12px);
border-left: 1px solid var(--border);
z-index: 50;
```

### 动画
```css
transform: translateX(100%); /* 关闭状态 */
transform: translateX(0);    /* 打开状态 */
transition: transform 300ms ease-in-out;
```

## 交互行为

| 动作 | 行为 |
|------|------|
| 点击"文件"按钮 | 面板从右侧滑入 |
| 点击关闭按钮 | 面板滑出 |
| 按下 Escape | 面板滑出 |

## 实现变更

### chat-box.tsx
- 移除 `ResizablePanelGroup`、`ResizablePanel`、`ResizableHandle`
- 改用固定定位的 div 作为面板容器
- 添加 `translateX` 动画 class
- 添加 Escape 键监听

### 无需新增组件
- 复用现有 `ArtifactFileDetail`、`ArtifactFileList`
- 复用现有关闭按钮样式

## 移除的代码

- `CLOSE_MODE` 和 `OPEN_MODE` 常量
- `ResizablePanelGroup` 及相关组件
- `layoutRef`
- `resizableIdBase`

## 待验证

- [ ] 面板在各种屏幕尺寸下正常显示
- [ ] 动画流畅无卡顿
- [ ] Escape 键关闭功能正常
- [ ] 聊天内容可正常滚动
