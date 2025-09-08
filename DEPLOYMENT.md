# 部署指南

## 项目信息
- **项目类型**: React + TypeScript + Vite + React Router
- **构建命令**: `npm run build`
- **构建输出**: `dist/` 文件夹
- **本地开发**: `npm run dev`

## ⚠️ 重要：SPA 路由配置

**你的项目使用了 React Router，需要特殊配置：**

### 已创建的配置文件：
- ✅ `vercel.json` - Vercel 路由重写配置
- ✅ `public/_redirects` - Netlify 重定向配置

### 路由问题解决：
- 所有路由（如 `/about`, `/project`, `/blog`）都会重定向到 `index.html`
- React Router 会在客户端处理路由切换
- 这样就不会出现 404 错误了

## 部署方案

### 方案一：Vercel（推荐）

1. **准备代码**
   ```bash
   # 确保代码已推送到 GitHub
   git add .
   git commit -m "修复 SPA 路由问题"
   git push origin main
   ```

2. **部署步骤**
   - 访问 [vercel.com](https://vercel.com)
   - 使用 GitHub 账号登录
   - 点击 "New Project"
   - 选择你的仓库
   - Vercel 会自动检测到 Vite 项目
   - 点击 "Deploy"
   - 等待部署完成（通常 1-2 分钟）

3. **配置**
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 方案二：Netlify

1. **拖拽部署**
   - 访问 [netlify.com](https://netlify.com)
   - 直接拖拽 `dist` 文件夹到部署区域
   - 获得临时域名

2. **Git 集成部署**
   - 连接 GitHub 仓库
   - 设置构建命令：`npm run build`
   - 设置发布目录：`dist`
   - `_redirects` 文件会自动处理路由

### 方案三：GitHub Pages

1. **安装 gh-pages**
   ```bash
   npm install --save-dev gh-pages
   ```

2. **添加部署脚本到 package.json**
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **部署**
   ```bash
   npm run deploy
   ```

## 部署前检查清单

- [ ] 代码已推送到 Git 仓库
- [ ] 运行 `npm run build` 成功
- [ ] 检查 `dist` 文件夹内容
- [ ] 确认 `vercel.json` 和 `_redirects` 文件存在
- [ ] 本地测试构建版本
- [ ] 确认所有资源路径正确

## 常见问题

### 1. 路由 404 错误（已解决）
**问题**: 点击导航链接出现 404 错误
**原因**: 服务器没有配置 SPA 路由回退
**解决**: 已创建 `vercel.json` 和 `_redirects` 文件

### 2. 资源加载问题
检查所有静态资源（图片、视频等）路径是否正确。

### 3. 环境变量
如果有环境变量，确保在部署平台正确配置。

## 推荐流程

1. **立即部署**: 使用 Vercel（最简单）
2. **持续部署**: 连接 GitHub，每次推送自动部署
3. **自定义域名**: 在 Vercel 中添加你的域名
4. **SSL 证书**: Vercel 自动提供免费 SSL

## 性能优化建议

- 启用 Gzip 压缩
- 使用 CDN 加速
- 优化图片大小
- 启用浏览器缓存