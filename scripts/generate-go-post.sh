#!/bin/bash

set -e

echo "🔧 [post-generate] Go go.mod oluşturuluyor ve modül toparlanıyor..."

# go.mod oluştur (varsa üzerine yazar)
cat <<EOF > go.mod
module github.com/orjinfinity/suit-proto

go 1.21
EOF

# go.sum üretmek ve modülleri çözmek için
go mod tidy

# (isteğe bağlı) goimports ile formatla
if command -v goimports &> /dev/null; then
  echo "✨ [post-generate] goimports uygulanıyor..."
  find gen/go -type f -name "*.go" -exec goimports -w {} +
fi

echo "✅ Go tarafı tamamlandı."