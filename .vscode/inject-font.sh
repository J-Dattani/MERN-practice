#!/bin/bash
# Injects Fira Code directly into the local web server rendering engine
echo "Injecting Fira Code into Web VS Code..."
mkdir -p .vscode/web-injection
cat << 'EOF' > .vscode/web-injection/font.css
@import url('https://googleapis.com');
.monaco-editor, .editor-instance {
    font-family: 'Fira Code', monospace !important;
}
EOF
