#!/bin/bash

set -e

echo "🔧 [post-generate] Rust lib.rs ve Cargo.toml oluşturuluyor..."

cd gen/rust

# lib.rs oluştur
echo "// Auto-generated lib.rs" > lib.rs
for file in *.rs; do
  [[ "$file" == "lib.rs" ]] && continue
  mod="${file%.rs}"
  echo "pub mod $mod { include!(\"$file\"); }" >> lib.rs
done

# Üst dizine Cargo.toml yaz
cd ../../

cat <<EOF > Cargo.toml
[package]
name = "suit-proto"
version = "0.1.1"
edition = "2021"
publish = false

[dependencies]
prost = "0.12"
tonic = { version = "0.11", features = ["transport"] }

[lib]
path = "gen/rust/lib.rs"
EOF

echo "✅ Rust tarafı tamamlandı."