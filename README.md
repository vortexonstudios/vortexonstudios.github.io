# Vortexon Studios - Paw Story Website

Vortexon Studios'un resmi web sitesi.

## 🚀 GitHub Pages'e Yayınlama Adımları

### 1. GitHub Repository Oluşturma

1. GitHub'da yeni bir repository oluşturun
2. Repository adını `vortexonstudios.github.io` veya başka bir isim yapın
3. Repository'yi public yapın (GitHub Pages için gerekli)

### 2. Projeyi GitHub'a Yükleme

```bash
# Git'i başlat (eğer başlatılmadıysa)
git init

# Tüm dosyaları ekle
git add .

# İlk commit
git commit -m "Initial commit: Vortexon Studios website"

# GitHub repository'nizi ekleyin (URL'yi kendi repository'niz ile değiştirin)
git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git

# Main branch'e gönder
git branch -M main
git push -u origin main
```

### 3. GitHub Pages'i Aktifleştirme

1. Repository'nize gidin
2. **Settings** sekmesine tıklayın
3. Sol menüden **Pages** seçeneğine gidin
4. **Source** bölümünden **Deploy from a branch** seçin
5. Branch olarak **main** seçin
6. Folder olarak **/ (root)** seçin
7. **Save** butonuna tıklayın

### 4. Özel Domain (Custom Domain) Bağlama

#### A. GitHub'da Domain Ayarları

1. Repository **Settings** > **Pages** bölümüne gidin
2. **Custom domain** alanına domain adınızı girin (örn: `vortexonstudios.com` veya `www.vortexonstudios.com`)
3. **Save** butonuna tıklayın
4. Bu işlem `CNAME` dosyasını otomatik oluşturur veya mevcut dosyayı kullanır

#### B. DNS Ayarları (Domain Sağlayıcınızda)

Domain sağlayıcınızın DNS panelinde şu kayıtları ekleyin:

**Seçenek 1: Apex Domain (vortexonstudios.com) için:**
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

**Seçenek 2: WWW Subdomain (www.vortexonstudios.com) için:**
```
Type: CNAME
Name: www
Value: KULLANICI_ADINIZ.github.io
```

**Her İkisi İçin (Önerilen):**
- Hem A kayıtlarını (@) hem de CNAME kaydını (www) ekleyin
- Böylece hem `vortexonstudios.com` hem de `www.vortexonstudios.com` çalışır

#### C. HTTPS Etkinleştirme

1. DNS ayarları tamamlandıktan sonra (24-48 saat içinde)
2. GitHub Pages **Settings** > **Pages** bölümünde
3. **Enforce HTTPS** seçeneğini işaretleyin
4. Bu işlem SSL sertifikası sağlar

### 5. Yayın Sonrası Kontroller

- `https://KULLANICI_ADINIZ.github.io` adresinde siteniz görünmeli
- Domain ayarları tamamlandıktan sonra `https://vortexonstudios.com` çalışmalı
- HTTPS otomatik olarak etkinleşmeli

## 📝 Notlar

- DNS değişiklikleri 24-48 saat içinde aktif olabilir
- Domain doğrulaması için GitHub bazen email gönderir
- `CNAME` dosyası repository'de olmalı
- GitHub Pages ücretsizdir ve otomatik HTTPS sağlar

## 🔧 Güncellemeler

Siteyi güncellemek için:

```bash
git add .
git commit -m "Update: site güncellemesi"
git push origin main
```

Güncellemeler birkaç dakika içinde canlıya alınır.

## 📞 Destek

Sorun yaşarsanız GitHub Pages dokümantasyonunu kontrol edin:
https://docs.github.com/en/pages


