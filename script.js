// PANNU RASOI

console.log("Welcome to PANNU RASOI");

// Button click
const btn = document.querySelector(".btn");

if (btn) {
    btn.addEventListener("click", function () {
        alert("🙏 PANNU RASOI में आपका स्वागत है!\nजल्द ही ऑनलाइन ऑर्डर सुविधा शुरू होगी।");
    });
}

// Footer year auto update
const footer = document.querySelector("footer p");

if (footer) {
    footer.innerHTML = `© ${new Date().getFullYear()} PANNU RASOI | All Rights Reserved`;
}
