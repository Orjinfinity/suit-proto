#!/bin/bash

set -e

echo "🔧 [post-generate] Rust lib.rs ve Cargo.toml oluşturuluyor..."

cd gen/rust

echo "// Auto-generated lib.rs" > lib.rs
echo "pub mod projectsuit {" >> lib.rs

# Önce modül yapısını oluştur
declare -A modules
for file in *.rs; do
  [[ "$file" == "lib.rs" ]] && continue

  name="${file%.rs}"
  parts=(${name//./ })
  
  module="${parts[1]}"
  version="${parts[2]}"
  is_tonic=false
  [[ "${parts[3]}" == "tonic" ]] && is_tonic=true
  
  if [[ ! ${modules[$module]} ]]; then
    modules[$module]="$version"
  fi
done

# Modülleri yaz
for module in $(printf "%s\n" "${!modules[@]}" | sort); do
  echo "  pub mod $module {" >> lib.rs
  echo "    pub mod ${modules[$module]} {" >> lib.rs
  
  # Normal dosyayı ekle
  base_file="projectsuit.$module.${modules[$module]}.rs"
  if [[ -f $base_file ]]; then
    echo "      include!(\"$base_file\");" >> lib.rs
  fi
  
  # Tonic dosyasını ekle
  tonic_file="projectsuit.$module.${modules[$module]}.tonic.rs"
  if [[ -f $tonic_file ]]; then
    echo "      pub mod tonic {" >> lib.rs
    echo "        include!(\"$tonic_file\");" >> lib.rs
    echo "      }" >> lib.rs
  fi
  
  echo "    }" >> lib.rs
  echo "  }" >> lib.rs
done

echo "}" >> lib.rs

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