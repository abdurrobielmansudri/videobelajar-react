// src/views/Beranda.jsx
import React from 'react';
import CourseCard from '../ui/CourseCard'; // Memanggil cetakan kartu buatanmu

function Beranda({ onNavigate }) {
  // Seluruh data list kursus dari HTML murnimu dikumpulkan di sini
  const coursesData = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=500",
      badge: "Pemasaran",
      title: "Strategi Digital Marketing untuk Pemula",
      mentor: "Andi Wijaya",
      price: "Rp 149.000",
      rating: "4.8 (120)"
    },
    {
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=500",
      badge: "Desain",
      title: "UI/UX Design Fundamental dengan Figma",
      mentor: "Rian Setiawan",
      price: "Rp 199.000",
      rating: "4.9 (85)"
    },
    {
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=500",
      badge: "Bisnis",
      title: "Cara Validasi Ide Bisnis & Manajemen Produk",
      mentor: "Diana Putri",
      price: "Rp 249.000",
      rating: "4.7 (94)"
    },
    {
      image: "https://images.unsplash.com/photo-1472289065668-ce650ac443d2?auto=format&fit=crop&w=500",
      badge: "Pengembangan Diri",
      title: "Manajemen Waktu & Produktivitas Kerja",
      mentor: "Eko Prasetyo",
      price: "Rp 99.000",
      rating: "4.6 (210)"
    },
    {
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=500",
      badge: "Pemasaran",
      title: "Copywriting Tradisional vs AI Digital Copy",
      mentor: "Sinta Bella",
      price: "Rp 129.000",
      rating: "4.8 (67)"
    },
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=500",
      badge: "Desain",
      title: "Panduan Membuat Design System yang Konsisten",
      mentor: "Kevin Sanjaya",
      price: "Rp 219.000",
      rating: "4.9 (43)"
    },
    {
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=500",
      badge: "Bisnis",
      title: "Strategi Scaling Up untuk Bisnis UMKM",
      mentor: "Denny Wahyudi",
      price: "Rp 189.000",
      rating: "4.5 (88)"
    },
    {
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=500",
      badge: "Pengembangan Diri",
      title: "Public Speaking & Teknik Presentasi Memukau",
      mentor: "Citra Kirana",
      price: "Rp 159.000",
      rating: "4.7 (154)"
    }
  ];

  return (
    <div>
     {/* NAVBAR */}
<header className="navbar">
  {/* Perbaikan typo dari alignItem menjadi alignItems */}
  <div className="logo" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="#22c55e">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
    <h2 style={{ margin: 0, fontSize: '1.5rem' }}>video<span>belajar</span></h2>
  </div>
  
  <div className="header-right">
    <div className="profile-avatar">
      <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=100&h=100" alt="Avatar Profil" />
    </div>
    {/* Hapus inline style di sini agar warna tombol murni diatur dari class .btn-logout */}
    <button className="btn-logout" onClick={() => onNavigate('login')}>
      Keluar
    </button>
  </div>
</header>

      <main>
        {/* HERO SECTION */}
        <section className="hero-section">
          <div className="hero-content">
            <h1>Temukan Kumpulan Video Belajar Terbaik di Sini</h1>
        
            <p>Tingkatkan keahlianmu bersama mentor profesional dengan materi yang dirancang khusus untuk industri saat ini.</p>
            <a href="#koleksi" className="btn-hero">Mulai Belajar</a>
          </div>
        </section>

        {/* COURSE SECTION */}
        <section id="koleksi" className="course-section">
          <h2>Koleksi Video Pembelajaran Unggulan</h2>
          <p className="section-subtitle">Jelajahi berbagai kategori kelas untuk memulai perjalanan jenjang kariermu.</p>

          <div className="category-tabs">
            <button className="tab-btn active">Semua Kelas</button>
            <button className="tab-btn">Pemasaran</button>
            <button className="tab-btn">Desain</button>
            <button className="tab-btn">Pengembangan Diri</button>
            <button className="tab-btn">Bisnis</button>
          </div>

          <div className="course-grid">
            {/* Proses Looping otomatis menggunakan .map() */}
            {coursesData.map((course, index) => (
              <CourseCard
                key={index}
                image={course.image}
                badge={course.badge}
                title={course.title}
                mentor={course.mentor}
                price={course.price}
                rating={course.rating}
              />
            ))}
          </div>
        </section>

        {/* NEWSLETTER SECTION */}
        <section className="newsletter-section">
          <div className="newsletter-box">
            <h2>Mau Dapat Info Kelas Gratis?</h2>
            <p>Daftarkan email Anda untuk mendapatkan update e-newsletter mingguan dan promo kelas menarik dari videobelajar!</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Masukkan email aktif Anda" required />
              <button type="submit">Langganan</button>
            </form>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="main-footer">
        <div className="footer-grid">
          <div className="footer-info">
            <h3>video<span>belajar</span></h3>
            <p>Platform pembelajaran video interaktif terbaik untuk meningkatkan skill masa kini.</p>
            <p className="copyright">&copy; 2026 videobelajar. All rights reserved.</p>
            <p className="created-by" style={{ fontSize: '0.8rem', color: '#22c55e', marginTop: '5px', fontWeight: '600' }}>⚡ Created with by Abdurrobi</p>
          </div>
          <div className="footer-links">
            <h4>Kategori</h4>
            <a href="#">Pemasaran</a>
            <a href="#">Desain</a>
            <a href="#">Pengembangan Diri</a>
            <a href="#">Bisnis</a>
          </div>
          <div className="footer-socials">
            <h4>Ikuti Kami</h4>
            <div className="social-icons">
              <a href="#">Instagram</a> | <a href="#">LinkedIn</a> | <a href="#">YouTube</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Beranda;