#!/bin/bash
echo "🌐 Starting local preview server..."
echo "📂 Directory: docs/"
echo "🔗 URL: http://localhost:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo "================================"
cd docs && python3 -m http.server 8000
