function popMessage(){
  alert("welcome to javascript");
  document.getElementById("msg").innerText ="welcome to javascript";
}

document.addEventListener("DOMContentLoaded", function () {

  //--- 1. lightbox functionality---
  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox");
  const closeBtn = document.querySelector(".close-btn");
  const galleryImages = document.queryselector(".closed-btn");

  galleryImages.foreach(img => {
    img.addEventListener("click", function () {
      lightbox.style.display ="flex";
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

  accordions. forEach(acc => {
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
  const input =document.getElementById("searchInput").value.tolowerCase();
  const productCards =document.querySelectorAll(".product-card");

  productCards.foreach(card => {
    const tile = card. querySelector("h3").innerText.toLowerCase();
    const description = card.querySelector("p").innerText.toLowerCase();

    if (title.includes9input) || description.includes(input));
    card.style.display = "block";
  } else {
    card.style.display = "none";
  }
  });
}
