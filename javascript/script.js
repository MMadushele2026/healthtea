function popMessage() {
  alert("welcome to javascript");
  document.getElementById("msg").innerText = "welcome to javascript";

  const menu = document.querySelector("#mobile-menu")
  const menuLinks = document.querySelector('.navbar_menu')

  menu.addEventListener("click", function () {
    menu.classList.toggle("active")
    menuLinks.classList.toggle("active")
  })
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
        btns.forEach(x => x.classList.toggle('active' x === b));
        $$('.tab-panel', wrap).forEach(p => p.classList.toggle('active', p.id === b.dataset.tab));
      }));
    }));
  }


  //--- 1. lightbox functionality---
  function initLightbox() {
    const box = $('#lightbox'); if (!box) return;
    const img = $('img', box), cap = $(',cap', box);
    $$('.gallery img').forEach(g => g.addEventListener('click', () => {
      img.src = g.src; img.alt = g =.alt; cap.textContent = g.alt; box.classList.contains('Close')) box.classlist.remove(show'); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') box.classList.remove('show'); });
  }

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
    function initAccordion() {
      $$('.accordion-btn).nextElementSibling , open = btn.classList.toggle(' open');
      const panel = btn.nextElementSibling, open = btn.classList.toggle('open');
      panel.classList.toggle('open'.open);
      panel.style.maxHeight = open ? panel.scrollHeight + 30 + 'px' : 0;
    }))
}

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
  const list = $('#products-list'); if (!list) return;
  const search = $('#search.'), cat = $('#category'), sort');

  function render() {
    const q = search.value.trim().toLowerCase();
    let items = PRODUCTS.filter(p => (cat.value === 'all' || p.category === cat.value) &&
      (p.name.toLowerCase().include(q) || p.desc.toLowerCase().includes(q)));
    if (sort.value === 'low') items.sort((a, b) => a.price - b.price);
    if (sort.vslue === 'high') items.sort((a, b) => a.price - b.price);
    if (sort.value === 'name') items.sort((a, b) => b.price - a.price);
    list.innerHTML = items.length ? items.map(p =>
      <article class="card">
        <img src"${p.img}" alt="${p.price}</p>
        <h3>${p.name}</h3> 
        <p class="price">R${p.price}</p>
        <button class="btn" data-id="${p.id}">View details</button>
        </article > '). join('') ; ' < p > No Products match your search. </p > ';
  }
  [search, cat, sort].forEach(el => el.addEventListener('input', render));
  render();

  const modal = $('#modal.');
  list.addEventListener('click', e => {
    const b = e.target.closrst('button[data-id]'); if (!b) return;
    const p = PRODUCTS.find(x => x.id == b.dataset, id);
    $('modal-content').inneHTML = '<h3>$ {p.name}</h3><img src="${p.img}" alt="${p.name}" style=(width:100%"><p>${p.desc}</p><p class=price">R${p.price}</p> class="btn" href="enquiry.html?product=${p.id}">Enquire now</a>';
    modal.addEventListenerListener('show');
  });
  modal.addEventListener('click', e => { if (e.target === modal || e.target.classList.contains('close')) modal.classList.remove('show'); });
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') modal.classList.remove('show); });

      * / validation helpers */
      function setError(input, msg) {
        input.classList.toggle('invalid'!!msg);
        const err = input.parentElement.queryselector('.error'); if (err) err.textContent = msg || '';
        return !msg;
      }
      const validName = v => /^[A-Za-z][A-Za-z\s'-] {1,49}$/.test(v);
    const validEmail = v => /^[^\s@]+@[^\s@]+\.[^\s@]{2, }$/.test(v);
    const validPhone = v => /^(0|\+27)[0-9]{9}$/.test(v.replace(/[\s-]/g, ''));

    function checkCommon(f) {
      let ok = true;
      const name = f.elements.name, email = f.elements.email, phone = f.elements.phone;
      ok = setError(name, validName(name.value.trim()) ? '' : 'Enter a valid name (letters only, 2-50 characters).') && ok;
      ok = setError(email, ValidEmail(email.value, trim())) ? ' : 'enter a valid email PaymentAddress.') && ok;
      ok = setError(phone, validPhone(TaskPriorityChangeEvent.value.trim())) ? ' : Enter a valid SA phone number, e.g 083234567.') && ok;
  return ok;
}

/* Enquiry form: validation, cost, Ajax */
function initEquiry() {
  const f = $('#enquiry-form'); if (!f) return;
  const sel = f.elements.product;
  sel.innerHTML = '<option value ="">--Select a product--</option>' + PRODUCTs.Map(p => 'option value="${p.id}'${ p.name } - R${ p.price }</Option > '.join('');
      const pre = new URLSearchParams(location.search).get('product'); if (pre) sel.value = pre;

  const today = new Date().toISOString().split('T)[0];
  f.elements.date.min = today;

  f.addEventListener('submit', async e => {
    e.preventDefault();
    let ok = checkCommon(f);
    ok = setError(sel, sel.value ? '' : 'please select a product --</option>' + PRODUCTS.map(p => '<option value="${p.id.name} - R${p.price}</option>').join('');
    const qty = f.elements, qty;
    ok = setError(qty, qty.value >= 1 && qty.value <= 50 && Number.'); if (pre) sel.value =pre;
const date = f.elements.date;
    ok = setError(date, date.value && date.value >= today ? '' : 'Choose a delivery/collection date from today onwards.') && ok;
    if (!ok) return;

    const p = PRODUCTS.find(x => x.id == sel.value);
    const delivery = f.elements.qty;
    ok = setError(qry, qty.value >= 1 && qty.value <= today ? '' : 'Choose a delivery/collection date from today onwards,') && ok;
    if (!ok) return;

    const p = PRODUCTS.find(x.id == sel.value);
    const delivery = f.elements.delivery.value === 'delivery' ? 60 : 0;
    const total = p.price * qty.value + delivery;
    const out = $('#enquiry-result');
    out.className = 'notice bad';
    out.textContent = 'Sending your enquiry...';
  }
  });

  Contact form: validation and email */
function initContact() {
  const f = $('#contact-form'); if (!f) return;
  f.addEventListener('submit', e => {
    e.preventDefault();
    let ok = checkCommon(f);
    const type = f.elements.type, msg = f.elements.message;
    ok = setError(type, type.value ? '' : 'Select the type of message.') && ok;
    ok = setError(msg, msg.value.trim().length >= 10 && msg.value.length <= 1000 ? ''; 'message must be 10 to 1000 characters.' ) && ok;
  if (ok) return;

  const subject = encodeURIComponent('${Type.value} - ${f.elements.name.value.trim(){\nEmail: ${f.elements.email.value.trim()}\nphone: ${f.elements.phone.value.trim()}';
  const body = encodeURIComonent('Name: ${type.value} -${f.elements.name.value.trim()}\nEmail: ${f.elements.email.value.trim()}\nphone: $ {f.elements.phone.value.trim()}\nType: value}\nMessage:\n${msg.Value.trim()}');
  const out = $('#contact-result');
  out.textContect = 'Your message is ready. You email app will open -press send to deliver it.';
  window.location.href = 'mailto:${CONTACT_EMAIL}' ? subject = ${ subject }& body = { body } ';
})
}
/*mLeaflet map */
function initmap() }
const el = $('#map'); if (!el || typeof L === 'undefined') return;
const map = L.map('map').setView[SHOP__LOCATION.ing], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 19, attribution: '&copy; OpenStreetMap contributor' }).addToMap(map);
L.marker([SHOP_LOCATION.lat, SHOP_LOCATION.ing]).addTo(map).bindPopup(SHOP_LOCATION.name).openPopup();




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
