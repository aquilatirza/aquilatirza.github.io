document.addEventListener("DOMContentLoaded", function () {
    console.log("Website siap digunakan!");

    // Menangani klik pada tautan di navigasi
    const links = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section');

    links.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault(); // Mencegah perilaku default tautan
            sections.forEach(section => {
                section.style.display = 'none'; // Sembunyikan semua bagian
            });
            const targetId = this.getAttribute('href'); // Ambil ID target dari href
            document.querySelector(targetId).style.display = 'block'; // Tampilkan bagian yang sesuai
        });
    });

    // Tampilkan bagian beranda secara default saat halaman dimuat
    sections.forEach(section => {
        section.style.display = 'none'; // Sembunyikan semua bagian
    });
    document.getElementById('home').style.display = 'block'; // Tampilkan bagian beranda
});