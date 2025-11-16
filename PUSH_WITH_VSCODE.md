# 使用VSCode推送到GitHub

由于您已经配置了VSCode的GitHub集成，最简单的方式是直接在VSCode中推送。

## 📝 使用VSCode Git面板推送

### 方法1: 使用Source Control面板

1. **打开Source Control面板**
   - 按 `Ctrl+Shift+G` (Windows/Linux) 或 `Cmd+Shift+G` (Mac)
   - 或点击左侧活动栏的源代码管理图标

2. **查看提交**
   - 您应该能看到1个提交: "Add DRP experimental results website"
   - 52个文件已提交

3. **发布到GitHub**
   - 点击 "Publish Branch" 按钮
   - 或点击 "..." 菜单 → "Push to..."
   - VSCode会自动使用您配置的GitHub凭据

4. **选择仓库设置**
   - Repository name: `drp-framework`
   - Description: `Multi-robot task allocation experimental results`
   - Public 或 Private (根据需要)

5. **确认推送**
   - VSCode会自动创建仓库并推送所有内容

### 方法2: 使用命令面板

1. 按 `Ctrl+Shift+P` (Windows/Linux) 或 `Cmd+Shift+P` (Mac)
2. 输入: `Git: Push`
3. 选择 `origin/main`
4. VSCode会处理推送

### 方法3: 使用终端但通过VSCode

1. 在VSCode中打开集成终端: `` Ctrl+` ``
2. VSCode的终端会使用您配置的凭据
3. 运行:
   ```bash
   git push -u origin main
   ```

## ✅ 推送成功后

您应该能看到:
- ✅ 仓库: https://github.com/USTCzzl/drp-framework
- ✅ 52个文件已上传
- ✅ 提交历史中显示 "Add DRP experimental results website"

## 🌐 启用GitHub Pages

推送成功后:

1. 访问: https://github.com/USTCzzl/drp-framework/settings/pages

2. 设置:
   - **Source**: Deploy from a branch
   - **Branch**: main
   - **Folder**: /docs
   - 点击 "Save"

3. 等待1-2分钟，网站将在以下地址可用:
   ```
   https://USTCzzl.github.io/drp-framework/
   ```

## 🔧 如果VSCode推送失败

如果VSCode也无法推送，可能需要:

1. **重新认证GitHub**
   - 按 `Ctrl+Shift+P`
   - 输入: `GitHub: Sign Out`
   - 然后: `GitHub: Sign In`
   - 重新授权VSCode访问GitHub

2. **使用Personal Access Token**
   - 创建token: https://github.com/settings/tokens/new
   - 在VSCode中使用token作为密码

3. **使用GitHub Desktop** (最可靠)
   - 下载: https://desktop.github.com/
   - Add Local Repository → `/home/lee/Desktop/code`
   - Publish repository

## 📊 当前状态

- ✅ Git仓库已配置
- ✅ 52个文件已提交到本地
- ✅ 用户信息已设置 (USTCzzl)
- ✅ 远程仓库已配置 (origin → github.com/USTCzzl/drp-framework.git)
- ⏳ 等待推送到GitHub

## 🎯 推荐步骤

**最简单的方式**:

1. 在VSCode中按 `Ctrl+Shift+G` 打开源代码管理
2. 点击 "Publish Branch" 或 "..." → "Push"
3. 等待VSCode完成推送
4. 访问 https://github.com/USTCzzl/drp-framework 确认
5. 启用GitHub Pages

就这么简单！
