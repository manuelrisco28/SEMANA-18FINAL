const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeToggle.textContent = document.body.classList.contains("dark-theme")
        ? "Cambiar a Tema Claro"
        : "Cambiar a Tema Oscuro";
});

const filterInput = document.getElementById("filter-skills");
const skillsTags = document.querySelectorAll(".skills-tags .tag");

filterInput.addEventListener("input", (e) => {
    const filter = e.target.value.toLowerCase();
    skillsTags.forEach(tag => {
        if (tag.textContent.toLowerCase().includes(filter)) {
            tag.style.display = "inline-block";
        } else {
            tag.style.display = "none";
        }
    });
});
const contactForm = document.querySelector(".contact-form form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); 
    const name = contactForm.querySelector("input[name='name']").value;
    const email = contactForm.querySelector("input[name='email']").value;

    if (name.trim() === "" || email.trim() === "") {
        alert("Por favor, completa todos los campos.");
        return;
    }

    alert(`Gracias, ${name}. Tu mensaje ha sido enviado.`);
    contactForm.reset();
});

const buttons = document.querySelectorAll("section.references button");

buttons[0].addEventListener("click", () => {
    alert("¡Mensaje enviado!");
});

buttons[1].addEventListener("click", () => {
    const phone = "+51XXXXXXXXX"; 
    const message = encodeURIComponent("Hola, quisiera más información.");
    const url = `https://wa.me/${phone}?text=${message}`;
    window.open(url, "_blank");
});

const toggleButton = document.getElementById('toggle-theme');

if (localStorage.getItem('theme') === 'dark') {
  document.body.classList.add('dark-mode');
}

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const theme = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
  localStorage.setItem('theme', theme);
});




