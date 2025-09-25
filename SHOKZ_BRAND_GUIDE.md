# Shokz Account Center - Brand Design Guide

## 🎯 品牌设计理念

Shokz Account Center 基于 shokz.com 的品牌设计语言，为运动音频爱好者提供专业、现代、易用的账户管理体验。

## 🎨 品牌色彩系统

### 主色调
- **Shokz Black**: `#000000` - 主要品牌色，用于Logo、按钮、重要文本
- **Shokz White**: `#ffffff` - 背景色，提供清洁的视觉体验
- **Shokz Orange**: `#ff6b35` - 强调色，用于CTA按钮、状态指示

### 辅助色彩
- **运动蓝**: `#3b82f6` - 用于运动相关功能
- **成功绿**: `#10b981` - 用于成功状态、完成指示
- **警告黄**: `#f59e0b` - 用于警告、提醒
- **错误红**: `#ef4444` - 用于错误状态

### 灰度系统
- **Gray-50**: `#f9fafb` - 浅色背景
- **Gray-100**: `#f3f4f6` - 卡片背景
- **Gray-200**: `#e5e7eb` - 边框色
- **Gray-600**: `#4b5563` - 次要文本
- **Gray-900**: `#111827` - 主要文本

## 🏗️ 组件设计系统

### Logo设计
```tsx
<ShokzLogo size="md" showText={true} />
```
- 黑色方形背景，白色"S"字母
- 支持三种尺寸：sm, md, lg
- 可选择是否显示"Shokz"文字

### 页面标题
```tsx
<ShokzPageHeader 
  title="Account Settings" 
  subtitle="Manage your Shokz account and preferences" 
/>
```
- 统一的页面标题样式
- 包含Shokz Logo和描述文字
- 保持品牌一致性

### 卡片组件
```tsx
<ShokzCard hover={true}>
  <ShokzCardHeader>
    <h2>Card Title</h2>
  </ShokzCardHeader>
  <ShokzCardContent>
    Card content here
  </ShokzCardContent>
</ShokzCard>
```
- 白色背景，灰色边框
- 支持悬停阴影效果
- 模块化的头部和内容区域

### 按钮组件
```tsx
<ShokzButton variant="primary" size="md">
  Primary Action
</ShokzButton>
```
- **Primary**: 黑色背景，白色文字
- **Secondary**: 橙色背景，白色文字
- **Outline**: 灰色边框，透明背景

### 徽章组件
```tsx
<ShokzBadge variant="fitness">Running</ShokzBadge>
<ShokzBadge variant="achievement">Gold Member</ShokzBadge>
```
- **Fitness**: 橙色，用于运动相关标签
- **Achievement**: 渐变橙色，用于成就徽章
- **Status**: 绿色/黄色/红色，用于状态指示

## 🎯 用户体验设计

### 运动主题元素
- **健身挑战**: 橙色主题，鼓励用户参与运动
- **成就系统**: 渐变徽章，展示用户成就
- **运动统计**: 蓝色主题，展示运动数据
- **社区互动**: 社交分享功能，建立运动社区

### 个性化体验
- **用户偏好**: 根据运动类型定制界面
- **智能推荐**: 基于使用习惯推荐产品
- **个性化挑战**: 根据用户水平定制挑战
- **成就追踪**: 展示个人运动成就

### 品牌一致性
- **统一Logo**: 所有页面使用相同的Shokz Logo
- **一致色彩**: 严格遵循品牌色彩系统
- **统一字体**: 使用Inter字体，保持现代感
- **一致间距**: 使用Tailwind的间距系统

## 🔧 技术实现

### CSS变量系统
```css
:root {
  --shokz-black: #000000;
  --shokz-orange: #ff6b35;
  --shokz-blue: #3b82f6;
  /* ... 更多品牌色彩 */
}
```

### Tailwind配置
```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'shokz-black': '#000000',
        'shokz-orange': '#ff6b35',
        // ... 更多品牌色彩
      }
    }
  }
}
```

### 组件库结构
```
src/components/shokz/
├── ShokzLogo.tsx
├── ShokzPageHeader.tsx
├── ShokzCard.tsx
├── ShokzButton.tsx
├── ShokzBadge.tsx
└── index.ts
```

## 📱 响应式设计

### 移动端优化
- **触摸友好**: 按钮和链接有足够的触摸区域
- **简化导航**: 移动端使用简化的导航结构
- **优化布局**: 单列布局，减少横向滚动
- **快速加载**: 优化图片和资源加载

### 桌面端体验
- **多列布局**: 充分利用屏幕空间
- **悬停效果**: 丰富的交互反馈
- **键盘导航**: 支持键盘操作
- **高分辨率**: 支持高DPI显示

## 🎨 视觉层次

### 信息架构
1. **主要信息**: 使用大字体、高对比度
2. **次要信息**: 使用中等字体、中等对比度
3. **辅助信息**: 使用小字体、低对比度

### 视觉引导
- **色彩引导**: 使用橙色引导用户注意重要操作
- **空间引导**: 使用间距和分组引导用户视线
- **图标引导**: 使用直观的图标帮助用户理解功能

## 🔄 品牌扩展

### 未来扩展
- **深色模式**: 支持深色主题
- **多语言**: 支持国际化
- **主题定制**: 允许用户自定义主题色彩
- **品牌变体**: 支持不同地区的品牌变体

### 维护指南
- **定期更新**: 根据品牌指南更新组件
- **一致性检查**: 定期检查品牌一致性
- **用户反馈**: 收集用户反馈，持续改进
- **性能优化**: 持续优化加载性能

## 📊 品牌效果

### 用户体验提升
- **品牌认知**: 增强用户对Shokz品牌的认知
- **信任建立**: 通过专业设计建立用户信任
- **情感连接**: 通过运动主题建立情感连接
- **使用愉悦**: 提供愉悦的使用体验

### 业务价值
- **用户留存**: 提高用户留存率
- **品牌忠诚**: 增强品牌忠诚度
- **转化提升**: 提高转化率
- **口碑传播**: 促进用户推荐

---

这个品牌设计指南确保了Shokz Account Center与主品牌的一致性，同时为运动音频爱好者提供了专业、现代、易用的账户管理体验。
