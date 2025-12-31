onload = () => {
  // Aktifkan animasi bunga
  document.body.classList.remove("container");

  // Munculkan kartu ucapan setelah 1.5 detik
  setTimeout(() => {
    const card = document.getElementById("greetingCard");
    if (card) card.style.display = "flex";
  }, 1500);
};

// Tutup kartu
function closeCard() {
  const card = document.getElementById("greetingCard");
  if (card) {
    card.style.opacity = "0";
    setTimeout(() => {
      card.style.display = "none";
    }, 500);
  }
}
