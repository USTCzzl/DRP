# GitHub 推送指南

## 当前状态

✅ Git仓库已初始化
✅ 用户信息已配置 (USTCzzl / zzl1215@mail.ustc.edu.cn)
✅ 50个文件已提交到本地仓库
✅ 提交信息: "Add DRP experimental results website for Nature journal"

## 推送到GitHub的步骤

### 方式1: 使用GitHub Desktop (推荐 - 最简单)

1. 下载并安装 GitHub Desktop: https://desktop.github.com/
2. 打开 GitHub Desktop
3. 点击 File → Add Local Repository
4. 选择文件夹: `/home/lee/Desktop/code`
5. 点击 "Publish repository" 按钮
6. 设置:
   - Name: `drp-framework`
   - Description: "Multi-robot task allocation with capability evolution"
   - 取消勾选 "Keep this code private" (如果想公开) 或保持勾选 (私有仓库)
7. 点击 "Publish repository"

完成！跳转到"启用GitHub Pages"部分。

---

### 方式2: 使用Personal Access Token

#### 步骤1: 创建Personal Access Token

1. 访问: https://github.com/settings/tokens/new
2. 填写:
   - Note: `DRP Framework Upload`
   - Expiration: 选择 `90 days` 或更长
   - Scopes: 勾选 **repo** (完整仓库访问权限)
3. 点击 "Generate token"
4. **重要**: 复制生成的token (形如 `ghp_xxxxxxxxxxxx`)，只显示一次！

#### 步骤2: 在GitHub上创建仓库

1. 访问: https://github.com/new
2. 填写:
   - Repository name: `drp-framework`
   - Description: `Multi-robot task allocation with capability evolution under LTL specifications`
   - Public 或 Private (根据需要选择)
   - **不要**勾选任何初始化选项 (README, .gitignore, license)
3. 点击 "Create repository"

#### 步骤3: 推送代码

打开终端，执行以下命令（替换 YOUR_TOKEN 为步骤1中复制的token）:

```bash
cd /home/lee/Desktop/code

# 添加远程仓库 (使用token认证)
git remote add origin https://YOUR_TOKEN@github.com/USTCzzl/drp-framework.git

# 推送到GitHub
git push -u origin main
```

**示例** (假设token是 ghp_abc123):
```bash
git remote add origin https://ghp_abc123@github.com/USTCzzl/drp-framework.git
git push -u origin main
```

---

### 方式3: 使用SSH密钥 (如果已配置)

如果您已经配置了SSH密钥:

```bash
cd /home/lee/Desktop/code

# 添加SSH远程仓库
git remote add origin git@github.com:USTCzzl/drp-framework.git

# 推送
git push -u origin main
```

如果没有配置SSH密钥，使用方式1或方式2。

---

## 启用GitHub Pages

推送成功后:

1. 访问: https://github.com/USTCzzl/drp-framework/settings/pages

2. 在 "Build and deployment" 部分:
   - **Source**: 选择 "Deploy from a branch"
   - **Branch**: 选择 `main`
   - **Folder**: 选择 `/docs`

3. 点击 "Save"

4. 等待1-2分钟，GitHub会自动部署

5. 网站将在以下地址可用:
   ```
   https://USTCzzl.github.io/drp-framework/
   ```

6. 部署状态查看: https://github.com/USTCzzl/drp-framework/actions

---

## 推送成功后的确认

推送成功后，您应该能看到:

1. ✅ 在 https://github.com/USTCzzl/drp-framework 看到所有文件
2. ✅ 50个文件，包括:
   - docs/ 文件夹 (网站资源)
   - README.md
   - .gitignore
   - 各种配置和文档文件
3. ✅ 提交历史中显示您的提交信息

---

## 更新GitHub仓库链接

网站部署后，更新 `docs/index.html` 中的GitHub链接:

在第498行左右，将:
```html
<a href="https://github.com/yourusername/drp-framework" class="btn">
```

改为:
```html
<a href="https://github.com/USTCzzl/drp-framework" class="btn">
```

然后提交并推送更新:
```bash
git add docs/index.html
git commit -m "Update GitHub repository link"
git push origin main
```

---

## 故障排查

### 问题: 无法推送

**解决方案**:
- 确保token有正确的权限 (repo scope)
- 检查token是否过期
- 确认仓库已在GitHub上创建

### 问题: GitHub Pages不显示

**解决方案**:
- 确认 Settings → Pages 设置为 main 分支，/docs 文件夹
- 等待几分钟让GitHub完成部署
- 检查 Actions 标签页是否有错误

### 问题: 图片不显示

**解决方案**:
- 确认所有资源文件已正确提交
- 检查浏览器控制台是否有404错误
- 确认文件路径大小写正确

---

## 联系信息

- GitHub用户: USTCzzl
- 邮箱: zzl1215@mail.ustc.edu.cn
- 仓库: https://github.com/USTCzzl/drp-framework

---

**祝部署顺利！**
