# 登录页重设计 - 设计规范

**日期：** 2026-04-02
**状态：** 已确认
**版本：** 1.0

---

## 1. 概念与愿景

将登录页从"蝴蝶动画欢迎页"重新设计为"晨雾森林"风格的认证页面。整体氛围宁静禅意，破茧光芒若隐若现，传达"突破与蜕变"的主题。用户进入时感受到的是清晨森林的静谧，而非喧嚣的动效。

---

## 2. 设计语言

### 美学方向

**森林系 + 破茧光芒**
- 深苔藓绿渐变背景，如清晨薄雾笼罩的森林
- 破茧图片叠加，降低透明度呈现朦胧美感
- 金色光晕从茧的位置向外晕开，象征突破

### 配色方案

| 元素 | 颜色 | 说明 |
|------|------|------|
| 背景渐变起点 | `#1a3d2e` | 深苔藓绿 |
| 背景渐变终点 | `#0d1f17` | 墨绿 |
| 卡片背景 | `rgba(255, 252, 245, 0.08)` | 米白透明 |
| 文字主色 | `#f5f0e8` | 暖白 |
| 文字次色 | `#a8c5b8` | 淡绿灰 |
| 输入框边框 | `#3d5c4a` | 暗绿 |
| 按钮背景 | `#3d5c4a` | 暗绿 |
| 按钮悬停 | `#4a6d58` | 提亮 |
| 光晕色 | `rgba(255, 200, 100, 0.3)` | 暖金色 |

### 字体

- **标题：** Lora（衬线，优雅感）
- **正文/输入框：** Inter 或系统 sans-serif
- **英文副标题：** Lora italic

### 空间系统

- 卡片宽度：380px
- 卡片圆角：16px
- 输入框高度：48px
- 输入框圆角：8px
- 按钮高度：48px
- 按钮圆角：8px
- 卡片内边距：40px

### 动效哲学

**宁静克制，无过度动效**
- 无蝴蝶飞舞动画
- 无页面元素微动
- 仅保留 hover 状态的平滑过渡（200ms ease-out）
- 背景图片和光晕为静态呈现

---

## 3. 布局与结构

### 页面层次（从底到顶）

```
┌──────────────────────────────────────────┐
│  Layer 1: 破茧图片背景（全屏，opacity 30%）│
│  Layer 2: CSS 光晕（茧位置，模糊渐变）      │
│  Layer 3: 苔藓绿渐变叠加（opacity 85%）    │
│  Layer 4: 居中米白半透明卡片               │
│  Layer 5: 卡片内容（Logo、表单、链接）      │
└──────────────────────────────────────────┘
```

### 卡片内容结构

```
┌──────────────────────────────┐
│                              │
│     🌿 Cocoon Break          │  ← Logo + 小树叶 SVG
│     *Find Your Clarity*      │  ← 英文副标题（斜体）
│                              │
│     ┌────────────────────┐   │
│     │  账号               │   │  ← 账号输入框
│     └────────────────────┘   │
│     ┌────────────────────┐   │
│     │  密码               │   │  ← 密码输入框
│     └────────────────────┘   │
│                              │
│     [     进入探索     ]      │  ← 登录按钮
│                              │
│       探索更多 →              │  ← 底部链接
│                              │
└──────────────────────────────┘
```

### 响应式策略

- 移动端：卡片宽度 100% - 48px（左右各 24px 边距）
- 桌面端：卡片固定 380px 宽度
- 内容垂直居中于视口

---

## 4. 功能与交互

### 核心功能

- **账号输入**：文本输入框，placeholder "账号"
- **密码输入**：密码输入框，placeholder "密码"，显示/隐藏切换按钮（后续完善）
- **登录按钮**：暗绿背景 + 米白文字，点击后触发登录流程（当前仅为 UI）
- **探索更多链接**：文字链接，hover 时下划线出现（后续链接到关于页）

### 交互细节

| 元素 | 默认状态 | Hover 状态 | Active 状态 |
|------|----------|------------|-------------|
| 输入框 | 底部边框 #3d5c4a | 边框提亮 #4a6d58 | 边框变为 #f5f0e8 |
| 登录按钮 | bg #3d5c4a | bg #4a6d58 | scale 0.98 |
| 探索更多链接 | 无下划线 | 下划线出现 | color 变亮 |

### 当前状态说明

登录流程暂不实现，仅完成 UI 界面。输入框和按钮均为静态 UI，登录逻辑后续开发。

---

## 5. 组件清单

### LoginCard 组件

- **文件位置：** `frontend/src/components/login/LoginCard.tsx`
- **功能：** 居中卡片容器，包含 Logo、表单、按钮、链接
- **Props：** 无
- **状态：** 仅默认状态

### Input 组件

- **文件位置：** `frontend/src/components/login/Input.tsx`
- **功能：** 统一样式的输入框
- **Props：** `type`, `placeholder`, `value`, `onChange`
- **状态：** default, focus, error（error 状态后续完善）

### Button 组件

- **复用现有 PrimaryButton**，或创建 LoginButton 变体

### Background 组件

- **文件位置：** `frontend/src/components/login/Background.tsx`
- **功能：** 全屏背景层叠（图片 + 光晕 + 渐变）
- **Props：** 无

---

## 6. 技术方案

### 框架

- **前端框架：** Next.js 16 + React 19 + TypeScript
- **样式：** Tailwind CSS 4 + CSS 自定义属性
- **字体：** Google Fonts（Lora, Inter）

### 文件变更

| 操作 | 文件路径 |
|------|----------|
| 新增 | `frontend/src/components/login/LoginCard.tsx` |
| 新增 | `frontend/src/components/login/Input.tsx` |
| 新增 | `frontend/src/components/login/Background.tsx` |
| 新增 | `frontend/src/components/login/GradientButton.tsx` |
| 修改 | `frontend/src/app/page.tsx` |
| 修改 | `frontend/src/app/globals.css` |
| 移动/删除 | `frontend/src/components/login/PrimaryButton.tsx`（如不复用） |
| 移动/删除 | `frontend/src/components/login/WelcomeCard.tsx`（如不复用） |
| 移动/删除 | `frontend/src/components/login/ButterflyAnimation.tsx` |

### 背景实现

```tsx
// Background.tsx 简化结构
<div className="fixed inset-0 z-0">
  {/* 破茧图片 */}
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/cocoon-break-bg.png')",
      opacity: 0.3,
    }}
  />
  {/* 光晕 */}
  <div
    className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2"
    style={{
      background: "radial-gradient(circle, rgba(255,200,100,0.3) 0%, transparent 70%)",
      filter: "blur(60px)",
    }}
  />
  {/* 渐变叠加 */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#1a3d2e] to-[#0d1f17] opacity-90" />
</div>
```

---

## 7. 资源清单

### 图片

| 文件 | 路径 | 说明 |
|------|------|------|
| 破茧背景图 | `public/images/cocoon-break-bg.png` | AI 生成的全屏背景图 |

### 依赖

无新增依赖，使用现有 Google Fonts 配置。

---

## 8. 后续计划

- [ ] 实现真实登录流程（API 集成）
- [ ] 输入框错误状态处理
- [ ] 密码显示/隐藏切换
- [ ] 表单验证
- [ ] 登录按钮 loading 状态
