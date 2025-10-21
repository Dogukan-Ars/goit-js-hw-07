// --- 1. Adım: Elemanları seç ---
const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

// --- 2. Adım: Input olayını dinle ---
nameInput.addEventListener("input", (event) => {
  // Girilen değeri al ve kenarlardaki boşlukları temizle
  const trimmedValue = event.target.value.trim();

  // Eğer input boşsa veya sadece boşluklardan oluşuyorsa, "Anonymous" yaz
  nameOutput.textContent = trimmedValue === "" ? "Anonymous" : trimmedValue;
});
