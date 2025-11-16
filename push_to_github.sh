#!/bin/bash

# GitHub推送脚本
# 使用方法: ./push_to_github.sh YOUR_PERSONAL_ACCESS_TOKEN

echo "🚀 DRP Framework - GitHub推送脚本"
echo "=================================="
echo ""

# 检查是否提供了token
if [ -z "$1" ]; then
    echo "❌ 错误: 请提供Personal Access Token"
    echo ""
    echo "使用方法:"
    echo "  ./push_to_github.sh YOUR_TOKEN"
    echo ""
    echo "如何获取token:"
    echo "  1. 访问: https://github.com/settings/tokens/new"
    echo "  2. 勾选 'repo' 权限"
    echo "  3. 生成并复制token"
    echo ""
    exit 1
fi

TOKEN=$1

echo "📝 配置远程仓库..."
if git remote get-url origin &> /dev/null; then
    echo "   远程仓库已存在，更新URL..."
    git remote set-url origin https://$TOKEN@github.com/USTCzzl/drp-framework.git
else
    echo "   添加新的远程仓库..."
    git remote add origin https://$TOKEN@github.com/USTCzzl/drp-framework.git
fi

echo "✓ 远程仓库已配置"
echo ""

echo "📤 推送到GitHub..."
if git push -u origin main; then
    echo ""
    echo "=================================="
    echo "✅ 推送成功!"
    echo "=================================="
    echo ""
    echo "📋 下一步:"
    echo "  1. 访问仓库: https://github.com/USTCzzl/drp-framework"
    echo "  2. 启用GitHub Pages:"
    echo "     - 访问: https://github.com/USTCzzl/drp-framework/settings/pages"
    echo "     - Source: Deploy from a branch"
    echo "     - Branch: main"
    echo "     - Folder: /docs"
    echo "     - 点击 Save"
    echo "  3. 等待1-2分钟后访问:"
    echo "     https://USTCzzl.github.io/drp-framework/"
    echo ""
else
    echo ""
    echo "=================================="
    echo "❌ 推送失败"
    echo "=================================="
    echo ""
    echo "可能的原因:"
    echo "  1. Token无效或过期"
    echo "  2. 仓库不存在 - 请先在GitHub创建仓库"
    echo "  3. 网络连接问题"
    echo ""
    echo "请参考 GITHUB_PUSH_GUIDE.md 获取详细说明"
    echo ""
    exit 1
fi
