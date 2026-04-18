// sliders home section

const slides = [
    {
        image: "../image/Banner/banner01.jpg",
        title: "Embrace digital transformation<br>with power of technology",
        desc: "Customised Technology Solutions That Drive Real Business Impact.",
        btn: "Get A Free Quote",
        tag: "Welcome to Ornate",
    },
    {
        image: "../image/Banner/banner02.jpg",
        title: "Transform your business<br>with SAP & ERP solutions",
        desc: "Seamless implementation, smart automation, and scalable systems to accelerate your business growth.",
        btn: "Explore Services",
        tag: "Our Expertise",
    },
    {
        image: "../image/Banner/banner03.jpg",
        title: "Build your future<br>with our expert team",
        desc: "Work on innovative projects, grow your skills, and shape a successful career with us.",
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

// ── STICKY NAVBAR on scroll 100px ──
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY >= 100) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});

// Technologly section

// Tech Stack Data
const techStackData = {
    frontend: [
        {
            name: "HTML5",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
            name: "CSS3",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
            name: "JavaScript",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
            name: "React",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Vue.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
            name: "Angular",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
        },
        {
            name: "Next.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
        },
        {
            name: "Tailwind",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
    ],
    backend: [
        {
            name: "Node.js",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
            name: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "Java",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        },
        {
            name: "PHP",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
            name: "MySQL",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
            name: "MongoDB",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
        },
        {
            name: "Express",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
        },
        {
            name: "Django",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
    ],
    mobile: [
        {
            name: "Flutter",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        },
        {
            name: "React Native",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
            name: "Swift",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swift/swift-original.svg",
        },
        {
            name: "Kotlin",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg",
        },
        {
            name: "Android",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
            name: "iOS",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg",
        },
        {
            name: "Dart",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg",
        },
        {
            name: "Firebase",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
        },
    ],
    ai: [
        {
            name: "Python",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
            name: "TensorFlow",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
        },
        {
            name: "PyTorch",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",
        },
        {
            name: "OpenCV",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
        },
        {
            name: "Pandas",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg",
        },
        {
            name: "NumPy",
            img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg",
        },
        {
            name: "ChatGPT",
            img: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg",
        },
        {
            name: "Claude AI",
            img: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Claude_AI_logo.svg",
        },
    ],
};

function renderPanel(tab) {
    const panel = document.getElementById("panel-" + tab);
    const items = techStackData[tab];
    panel.innerHTML = `
    <div class="ts-logo-grid">
      ${items
            .map(
                (item) => `
        <div class="ts-logo">
          <img src="${item.img}" alt="${item.name}" />
          <span>${item.name}</span>
        </div>
      `,
            )
            .join("")}
    </div>
  `;
}

Object.keys(techStackData).forEach((tab) => renderPanel(tab));

const tsTabs = document.querySelectorAll(".ts-tab");
const tsPanels = document.querySelectorAll(".ts-panel");

tsTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        tsTabs.forEach((t) => t.classList.remove("active"));
        tsPanels.forEach((p) => p.classList.remove("active"));
        tab.classList.add("active");
        document.getElementById("panel-" + tab.dataset.tab).classList.add("active");
    });
});



// Clients Section

const clients = [
    { name: "National Technical Research Organisation", img: "https://www.ornatets.com/assets/img/client-1-removebg-preview.png" },
    { name: "Staff Selection Commission", img: "https://www.ornatets.com/assets/img/client-2-removebg-preview.png" },
    { name: "Telecommunication Engineering Centre", img: "https://www.certification-india.com/wp-content/uploads/india-telecommunication-engineering-center-logo.png" },
    { name: "Central Board of Secondary Education", img: "https://logowik.com/content/uploads/images/cbse-central-board-of-secondary-education7240.jpg" },
    { name: "Petroleum and Explosives Safety Organization (PESO)", img: "https://www.certification-india.com/wp-content/uploads/PESO-Logo.jpg" },
    { name: "Sports Authority of India (SAI)", img: "https://www.insidesport.in/wp-content/uploads/2022/06/sai.jpeg" },
    { name: "Ministry of Women and Child Development", img: "https://d2w7l1p59qkl0r.cloudfront.net/static/scholarship_logo/logo_23647_1682676420.png" },
    { name: "Ministry of Home Affairs", img: "https://2.bp.blogspot.com/-vj90veEW_8U/WmXWVTrQnuI/AAAAAAAAApQ/5eK7-mf32B0A1a8fF0eXTQEntyZF0pNrQCLcBGAs/s1600/Ministry-of-Home-Affairs-Go.jpg" },
];

 
function buildCard(c) {
  return `<div class="logo-card">
    <img src="${c.img}" alt="${c.name}" loading="lazy" />
    <div class="logo-name">${c.name}</div>
  </div>`;
}
 
const half1 = clients.slice(0, 8);
const half2 = clients.slice(8);
 
function fillRow(id, arr) {
  const el = document.getElementById(id);
  const doubled = [...arr, ...arr];
  el.innerHTML = doubled.map(buildCard).join('');
}
 
fillRow('row1', half1);
fillRow('row2', half2);



// scroll top

window.addEventListener("scroll", () => {
  const btn = document.querySelector(".back-top");

  if (window.scrollY > 300) {
    btn.classList.add("active");
  } else {
    btn.classList.remove("active");
  }
});

document.querySelector(".back-top").addEventListener("click", (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});