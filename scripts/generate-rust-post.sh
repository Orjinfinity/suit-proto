#!/bin/bash

set -e

echo "🔧 [post-generate] Rust lib.rs ve Cargo.toml oluşturuluyor..."

cd gen/rust

# Boş lib.rs başlat
echo "// Auto-generated lib.rs" > lib.rs

# Tüm .rs dosyalarını işle (lib.rs hariç)
for file in *.rs; do
  [[ "$file" == "lib.rs" ]] && continue

  # örnek: projectsuit.category.v1.rs -> ["projectsuit", "category", "v1"]
  IFS='.' read -ra parts <<< "${file%.rs}"

  # include satırını en son yazacağız
  include_line="include!(\"$file\");"

  # iç içe pub mod blokları oluştur
  indent=""
  for part in "${parts[@]}"; do
    echo "${indent}pub mod $part {" >> lib.rs
    indent+="  "
  done

  # include satırı
  echo "${indent}$include_line" >> lib.rs

  # blokları kapat
  for ((idx=${#parts[@]}-1; idx>=0; idx--)); do
    indent="${indent:0:-2}"
    echo "${indent}}" >> lib.rs
  done
done

cd ../../

# Cargo.toml oluştur
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