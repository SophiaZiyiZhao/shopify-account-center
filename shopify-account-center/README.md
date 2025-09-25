# Shokz Account Center

一个基于 Next.js 14 和 Shopify Storefront API 的现代化用户账户中心，专为 Shokz 音频品牌设计，提供简洁、优雅的用户体验。

## ✨ 特性

- 🎨 **现代化设计** - 专为 Shokz 音频品牌设计，科技感蓝色系配色，充足的留白和清晰的层级
- 📱 **完全响应式** - 完美适配桌面端、平板和移动设备
- 🌙 **暗色模式** - 支持明暗主题切换
- 🔐 **安全认证** - 基于 Shopify customerAccessToken 的安全认证系统
- ⚡ **高性能** - Next.js 14 App Router + TypeScript + Tailwind CSS
- 🛒 **完整功能** - 订单管理、地址簿、支付方式、通知设置等

## 🚀 技术栈

- **框架**: Next.js 14 (App Router)
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **API**: Shopify Storefront API (GraphQL)
- **状态管理**: React Server/Client Components + SWR
- **认证**: customerAccessToken + HttpOnly Cookies
- **图标**: Lucide React

## 📦 安装

1. **克隆项目**
   ```bash
   git clone <repository-url>
   cd shopify-account-center
   ```

2. **安装依赖**
   ```bash
   npm install
   # 或
   yarn install
   # 或
   pnpm install
   ```

3. **环境配置**
   ```bash
   cp env.example .env.local
   ```

   编辑 `.env.local` 文件，填入你的 Shopify 配置：
   ```env
   NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL=https://your-shop.myshopify.com/api/2023-10/graphql.json
   SHOPIFY_STOREFRONT_ACCESS_TOKEN=your_storefront_access_token_here
   NEXTAUTH_SECRET=your_nextauth_secret_here
   NEXTAUTH_URL=http://localhost:3000
   NEXT_PUBLIC_DEFAULT_THEME=light
   ```

4. **启动开发服务器**
   ```bash
   npm run dev
   # 或
   yarn dev
   # 或
   pnpm dev
   ```

   访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🏗️ 项目结构

```
src/
├── app/                    # Next.js App Router 页面
│   ├── account/           # 账户中心页面
│   │   ├── addresses/     # 地址管理
│   │   ├── notifications/ # 通知设置
│   │   ├── orders/        # 订单历史
│   │   ├── payment/       # 支付方式
│   │   └── profile/       # 个人资料
│   ├── api/               # API 路由
│   │   ├── auth/          # 认证相关
│   │   └── customer/      # 客户数据
│   ├── auth/              # 认证页面
│   └── globals.css        # 全局样式
├── components/            # React 组件
│   ├── auth/              # 认证组件
│   ├── layout/            # 布局组件
│   ├── ui/                # UI 基础组件
│   └── account/           # 账户相关组件
├── lib/                   # 工具库
│   ├── shopify.ts         # Shopify API 客户端
│   └── auth.ts            # 认证工具
├── types/                 # TypeScript 类型定义
└── utils/                 # 工具函数
```

## 🔧 配置说明

### Shopify Storefront API 配置

1. **获取 Storefront Access Token**
   - 登录 Shopify Admin
   - 进入 Apps > App and sales channel settings
   - 创建或管理 Private App
   - 启用 Storefront API 权限
   - 复制 Storefront access token

2. **配置权限**
   确保你的 Storefront Access Token 具有以下权限：
   - `unauthenticated_read_customers`
   - `unauthenticated_write_customers`

### 环境变量

| 变量名 | 描述 | 必需 |
|--------|------|------|
| `NEXT_PUBLIC_SHOPIFY_STOREFRONT_URL` | Shopify Storefront API URL | ✅ |
| `SHOPIFY_STOREFRONT_ACCESS_TOKEN` | Storefront Access Token | ✅ |
| `NEXTAUTH_SECRET` | NextAuth 密钥 | ✅ |
| `NEXTAUTH_URL` | 应用 URL | ✅ |
| `NEXT_PUBLIC_DEFAULT_THEME` | 默认主题 (light/dark) | ❌ |

## 🎨 设计系统

### 配色方案

项目采用专为 Shokz 品牌设计的配色方案：

- **主色调**: 科技感蓝色系 (primary-50 到 primary-900)
- **强调色**: Shokz 特色橙色系 (shokz-50 到 shokz-900)
- **辅助色**: 红色系 (accent-50 到 accent-900)
- **状态色**: 绿色 (成功)、红色 (错误)、黄色 (警告)

### 组件设计原则

- **留白充足**: 使用较大的 padding 和 margin
- **清晰层级**: 通过字体大小、颜色和间距建立视觉层级
- **简洁配色**: 主要使用中性色，少量强调色
- **良好移动端适配**: 响应式设计，移动端优先

## 📱 页面功能

### 首页 (/)
- Shokz 品牌介绍和特性展示
- 音频产品相关功能介绍
- 登录/注册入口
- 响应式设计

### 认证页面
- **登录** (`/login`): 用户登录表单
- **注册** (`/register`): 新用户注册表单

### 账户中心 (`/account`)
- **仪表板**: Shokz 账户概览、音频产品统计、最近订单
- **订单历史** (`/account/orders`): Shokz 产品订单列表、详情、状态跟踪
- **地址管理** (`/account/addresses`): 添加、编辑、删除地址
- **支付方式** (`/account/payment`): 管理保存的支付方式
- **通知设置** (`/account/notifications`): 邮件和推送通知偏好
- **个人资料** (`/account/profile`): 个人信息、音频偏好设置、安全设置

## 🔐 安全特性

- **HttpOnly Cookies**: 安全存储认证 token
- **CSRF 保护**: 内置 CSRF 保护
- **输入验证**: 客户端和服务端双重验证
- **安全头部**: 自动设置安全相关的 HTTP 头部

## 🚀 部署

### Vercel 部署 (推荐)

1. **连接 GitHub**
   ```bash
   # 推送代码到 GitHub
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Vercel 部署**
   - 访问 [vercel.com](https://vercel.com)
   - 导入 GitHub 仓库
   - 配置环境变量
   - 部署

### 其他平台

项目支持部署到任何支持 Next.js 的平台：
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🛠️ 开发指南

### 添加新页面

1. 在 `src/app/` 下创建新的路由文件夹
2. 添加 `page.tsx` 文件
3. 如需要，添加 `layout.tsx` 文件

### 添加新组件

1. 在 `src/components/` 下创建组件文件
2. 使用 TypeScript 和 Tailwind CSS
3. 遵循现有的设计模式

### API 开发

1. 在 `src/app/api/` 下创建 API 路由
2. 使用 Next.js 13+ 的 Route Handlers
3. 添加适当的错误处理和验证

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE) 文件

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

1. Fork 项目
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📞 支持

如有问题，请：
- 提交 [Issue](https://github.com/your-repo/issues)
- 发送邮件至 support@example.com

---

**享受使用 Shokz Account Center！** 🎧🎉
