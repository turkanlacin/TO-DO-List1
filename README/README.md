To-Do App

Bu proje, FastAPI backend ve HTML/CSS/JavaScript frontend kullanarak JWT tabanlı bir To-Do uygulaması geliştirme örneğidir.

🚀 Özellikler

Kullanıcı girişi (JWT ile)

Görev ekleme, listeleme, silme

Admin → herkesin görevlerini görebilir

Normal kullanıcı → sadece kendi görevlerini görebilir

Swagger UI üzerinden API test edilebilir

🔧 Kullanılan Teknolojiler

Backend: Python (FastAPI)

Frontend: HTML, CSS, JavaScript

Kimlik Doğrulama: JWT (JSON Web Token)

Dokümantasyon: Swagger UI (otomatik)

📦 Kurulum ve Çalıştırma

Backend

Gerekli paketleri yükle:

pip install -r requirements.txt

Backend’i başlat:

uvicorn main:app --reload

Swagger arayüzüne git:

http://127.0.0.1:8000/docs

Frontend

frontend/ klasörüne gir.

index.html dosyasını tarayıcıda aç.

Kullanıcı adı ve şifre ile giriş yap, görevleri yönet.

👥 Test Kullanıcıları

Rol

Kullanıcı Adı

Şifre

Admin

admin1

adminpass

Kullanıcı

user1

userpass

📁 Klasör Yapısı

myproject/
├── app/
│   ├── __init__.py
│   ├── models.py
│   ├── auth.py
│   └── routes.py
├── main.py
├── requirements.txt
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── app.js
└── README.md

📌 İleride Yapılabilecekler

Kullanıcı kayıt sistemi eklenebilir.

Gerçek bir veritabanı entegrasyonu (mock veri yerine).

Görevleri tamamlandı olarak işaretleme (update endpoint).

Frontend tarafında daha gelişmiş tasarım.

✉️ İletişim

Bu proje Türkan Laçin tarafından geliştirilmiştir.
Sorular veya katkılar için iletişime geçebilirsiniz.

turkanlacin24@gmail.com