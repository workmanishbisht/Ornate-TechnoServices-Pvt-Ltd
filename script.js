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
