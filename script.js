// sliders home section

const slides = [
  {
    image: "../image/Banner/banner01.jpg",
    title: "IT Solutions for<br>Your Business",
    desc: "Ornate Technologies — delivering cutting-edge tech solutions since 2010.",
    btn: "Get A Free Quote",
    tag: "Welcome to Ornate",
  },
  {
    image: "../image/Banner/banner02.jpg",
    title: "SAP & ERP<br>Experts",
    desc: "End-to-end SAP implementation, support and consulting services.",
    btn: "Explore Services",
    tag: "Our Expertise",
  },
  {
    image: "../image/Banner/banner03.jpg",
    title: "Grow With<br>Us",
    desc: "Join our team of talented professionals and build a great career.",
    btn: "View Careers",
    tag: "Join Our Team",
  },
];

const wrapper = document.querySelector(".homeSwiper .swiper-wrapper");

slides.forEach((slide) => {
  wrapper.innerHTML += `
    <div class="swiper-slide" style="
      background: url('${slide.image}') center/cover no-repeat;">
      <div class="slide-overlay"></div>
      <div class="slide-content">
        <span class="slide-tag">${slide.tag}</span>
        <h2>${slide.title}</h2>
        <p>${slide.desc}</p>
        <div class="slide-btns">
          <button class="btn-primary">${slide.btn}</button>
          <button class="btn-outline">Learn More</button>
        </div>
      </div>
    </div>
  `;
});

const swiper = new Swiper(".homeSwiper", {
  loop: true,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// hamburger section

const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  navLinks.classList.toggle("open");
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    hamburger.classList.remove("open");
    navLinks.classList.remove("open");
  });
});
