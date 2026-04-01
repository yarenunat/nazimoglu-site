document.getElementById("reservationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const peopleCount = document.getElementById("people_count").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    const message = `Merhaba, restoranınızdan rezervasyon yaptırmak istiyorum.\n\n*Rezervasyon Bilgileri:*\nAd: ${name}\nKişi Sayısı: ${peopleCount}\nTarih: ${date}\nSaat: ${time}\n\nİlginiz için teşekkürler.`;
    
    // Redirect to WhatsApp
    const whatsappUrl = `https://wa.me/905053948225?text=${encodeURIComponent(message)}`;
    window.location.href = whatsappUrl;
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);











