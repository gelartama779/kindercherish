const ageButtons = document.querySelectorAll(".age-card");
const products = document.querySelectorAll(".product-card");
const curriculumFilter = document.getElementById("curriculumFilter");
const languageFilter = document.getElementById("languageFilter");
const emptyState = document.getElementById("emptyState");
const toast = document.getElementById("toast");

let selectedAge = "all";

ageButtons.forEach(button => {
  button.addEventListener("click", () => {
    ageButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    selectedAge = button.dataset.age;
    filterProducts();
    document.getElementById("worksheets").scrollIntoView({ behavior: "smooth" });
  });
});

curriculumFilter.addEventListener("change", filterProducts);
languageFilter.addEventListener("change", filterProducts);

function filterProducts() {
  const curriculum = curriculumFilter.value;
  const language = languageFilter.value;
  let visible = 0;

  products.forEach(product => {
    const ageMatch = selectedAge === "all" || product.dataset.age === selectedAge;
    const curriculumMatch = curriculum === "all" || product.dataset.curriculum === curriculum;
    const languageMatch = language === "all" || product.dataset.language === language;

    if (ageMatch && curriculumMatch && languageMatch) {
      product.classList.remove("hidden");
      visible++;
    } else {
      product.classList.add("hidden");
    }
  });

  emptyState.classList.toggle("hidden", visible !== 0);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(window.toastTimer);
  window.toastTimer = setTimeout(() => toast.classList.remove("show"), 3000);
}

function buyProduct(productName) {
  showToast(`"${productName}" siap dibeli. Tambahkan link checkout/payment Anda di script.js.`);
}

function showShopeeNotice(event) {
  event.preventDefault();
  showToast("Tambahkan link Shopee Anda pada bagian Learning Tools.");
}

function showFreebieNotice(event) {
  event.preventDefault();
  showToast("Tambahkan link download free worksheet Anda di sini.");
}

function showBlogNotice(event) {
  event.preventDefault();
  showToast("Halaman blog dapat ditambahkan pada tahap berikutnya.");
}

function showContactNotice(event) {
  event.preventDefault();
  showToast("Tambahkan nomor WhatsApp KinderCherish pada link tombol ini.");
}

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => navLinks.classList.remove("open"));
});
