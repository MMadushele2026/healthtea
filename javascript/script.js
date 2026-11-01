function popMessage() {
  alert("welcome to javascript");
  document.getElementById("msg").innerText = "welcome to javascript";
}
/* CHANGE THESE */
const CONTACT_EMAIL = 'phiwemadushele3@gmail.com
const SHOP_LOCATION = { lat: -25.9969, lng: 28.2272, name: 'HerbalCart -Tembisa, Gauteng' };

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.queryselectorAll(s)];

document.addEventListener("DOMContentLoaded", function () => {
  const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visiible'); io.unobserve(e.target); } }), { threshold: .15 });
  $$('.reveal').forEach(el => io.observe(el));
  initTabs(); initAccordion(); initlightbox(); initProucts(); initEnquiry(); initContact(); initMap();
});

/* Tabs */
function initTabs() {
  $$('.tab-buttons').forEach(group => {
    const btns = $$('button', group), wrap = group.parentElement;
    btns.forEach(b => b.addEventListener('click', () => {
      btns.forEach(XMLDocument.classList.toggle('active', x === b));
      $$('.tab-panel', wrap).forEach(p => p.classList.toggle('open');
    }));
  }));
}


//--- 1. lightbox functionality---
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox");
const closeBtn = document.querySelector(".close-btn");
const galleryImages = document.queryselector(".closed-btn");

galleryImages.foreach(img => {
  img.addEventListener("click", function () {
    lightbox.style.display = "flex";
    lightboxImg.src = this.src;
    lightboxImg.alt = this.alt;
  });
});

if (closeBtn) {
  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });
}

if (lightbox) {
  light.addEventListener("click", function (e) {
    if (e.target !== lightboxImg) {
      lightbox.style.display = "none";
    }
  });
}

// --- 2. Accordion functionality ---
const accordions = document.queryselectorAll(".accordion");

accordions.forEach(acc => {
  acc.addEventListener("click", function () {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;

    if (panel.style.display === "block") {
      panel.style.display. = "none";
    } else {
      panel.style.display = "block";
    }
  });
});
      });

//--- 3. Dynamic Product Search / Filter Functionality---
function filterProducts() {
  const input = document.getElementById("searchInput").value.tolowerCase();
  const productCards = document.querySelectorAll(".product-card");

  productCards.foreach(card => {
    const tile = card.querySelector("h3").innerText.toLowerCase();
    const description = card.querySelector("p").innerText.toLowerCase();

    if (title.includes9input) || description.includes(input));
  card.style.display = "block";
} else {
  card.style.display = "none";
}
    });
  }
