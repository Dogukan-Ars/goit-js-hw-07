// --- 1. Adım: Form öğesini seç ---
const form = document.querySelector(".login-form");

// --- 2. Adım: Submit olayını dinle ---
form.addEventListener("submit", (event) => {
  // Sayfanın yeniden yüklenmesini engelle
  event.preventDefault();

  // Form elemanlarına eriş
  const { email, password } = event.target.elements;

  // Kenarlardaki boşlukları temizle
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // --- 3. Adım: Boş alan kontrolü ---
  if (emailValue === "" || passwordValue === "") {
    alert("All form fields must be filled in");
    return; // işlemi durdur
  }

  // --- 4. Adım: Nesne oluştur ---
  const formData = {
    email: emailValue,
    password: passwordValue,
  };

  // --- 5. Adım: Nesneyi konsola yazdır ---
  console.log("Form Data:", formData);

  // --- 6. Adım: Formu sıfırla ---
  form.reset();
});
