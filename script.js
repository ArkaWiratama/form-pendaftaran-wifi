// script.js (Menggunakan Timeout Mutlak untuk Stabilitas)

document.addEventListener('DOMContentLoaded', () => {
    const introAnimation = document.getElementById('intro-animation');
    const mainContent = document.getElementById('main-content');
    const daftarButton = document.getElementById('btn-daftar'); 
    
    // KRITIS: Waktu tunggu 6 detik untuk menjamin animasi 5 detik selesai total.
    const DURATION_WAIT = 6000; 

    // LANGKAH 1: Setelah 6 detik, mulai transisi ke konten utama
    setTimeout(() => {
        
        // 1a. Mulai FADE OUT ANIMASI (menggunakan CSS transition opacity)
        introAnimation.style.opacity = '0'; 
        
        // 1b. Tampilkan Konten Utama (menambahkan class 'visible' memulai fade-in CSS)
        mainContent.classList.add('visible'); 

    }, DURATION_WAIT); 
    
    
    // LANGKAH 2: Animasikan Tombol dan Hilangkan Animasi sepenuhnya (Setelah 6.5 Detik)
    setTimeout(() => {
        // Terapkan animasi kemunculan tombol
        daftarButton.style.animation = 'button-fade-in 0.7s ease-out forwards';
        
        // Hilangkan elemen animasi dari DOM setelah fade-out 0.5s selesai.
        setTimeout(() => {
             introAnimation.style.display = 'none';
        }, 500); 

    }, DURATION_WAIT + 500); // Total 6500ms (6.5 detik)

});