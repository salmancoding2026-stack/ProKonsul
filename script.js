// Mengambil elemen modal
const modal = document.getElementById("bookingModal");
const modalTitle = document.getElementById("modalTitle");
const form = document.getElementById("consultationForm");

// --- KONFIGURASI NOMOR WHATSAPP ---
// Masukkan nomor WA Anda di sini (Gunakan kode negara '62' tanpa '+')
// Contoh: 6281234567890
const nomorWhatsApp = "6285715630032"; 

// Fungsi untuk membuka Modal
function openModal(serviceName) {
    modal.style.display = "flex";
    modalTitle.innerText = "Konsultasi " + serviceName; // Judul diperbaiki agar lebih rapi
}

// Fungsi untuk menutup Modal
function closeModal() {
    modal.style.display = "none";
}

// Menutup modal jika user klik di area gelap (luar modal)
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

// Menangani Submit Form ke WhatsApp
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Mencegah reload halaman

    // 1. Ambil data dari formulir
    const name = document.getElementById("name").value;
    const contact = document.getElementById("contact").value; // Email atau WA user
    const message = document.getElementById("message").value;
    const serviceType = modalTitle.innerText; // Contoh: "Konsultasi Saham"

    // 2. Buat format pesan WhatsApp
    // \n digunakan untuk baris baru (Enter)
    const textMessage = `Halo Admin ProKonsul,%0A%0ASaya ingin melakukan pemesanan:%0A` +
                        `--------------------------------%0A` +
                        `👤 *Nama:* ${name}%0A` +
                        `📋 *Layanan:* ${serviceType}%0A` +
                        `📞 *Kontak:* ${contact}%0A` +
                        `📝 *Pesan/Masalah:* ${message}%0A` +
                        `--------------------------------%0A` +
                        `Mohon infonya. Terima kasih.`;

    // 3. Buat URL WhatsApp API
    const url = `https://wa.me/${nomorWhatsApp}?text=${textMessage}`;

    // 4. Buka WhatsApp di tab baru
    window.open(url, '_blank');

    // Reset form dan tutup modal setelah dikirim
    form.reset();
    closeModal();
});