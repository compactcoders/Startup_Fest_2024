
$(document).ready(function() {
  $(window).scroll(function() {
      // sticky navbar on scroll script
      if (this.scrollY > 20) {
          $('.navbar').addClass("sticky");
      } else {
          $('.navbar').removeClass("sticky");
      }

      // scroll-up button show/hide script
      if (this.scrollY > 500) {
          $('.scroll-up-btn').addClass("show");
      } else {
          $('.scroll-up-btn').removeClass("show");
      }
  });

  // slide-up script
  $('.scroll-up-btn').click(function() {
      $('html').animate({ scrollTop: 0 });
      // removing smooth scroll on slide-up button click
      $('html').css("scrollBehavior", "auto");
  });

  $('.navbar .menu li a').click(function() {
      // applying again smooth scroll on menu items click
      $('html').css("scrollBehavior", "smooth");
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function() {
      $('.navbar .menu').toggleClass("active");
      $('.menu-btn i').toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
      strings: ["Developer", "College Student", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  var typed = new Typed(".typing-2", {
      strings: ["Developer", "College Student", "Designer", "Freelancer"],
      typeSpeed: 100,
      backSpeed: 60,
      loop: true
  });

  // owl carousel script
  $('.carousel').owlCarousel({
      margin: 20,
      loop: true,
      autoplay: true,
      autoplayTimeOut: 2000,
      autoplayHoverPause: true,
      responsive: {
          0: {
              items: 1,
              nav: false
          },
          600: {
              items: 2,
              nav: false
          },
          1000: {
              items: 3,
              nav: false
          }
      }
  });
});

ScrollReveal().reveal('.fadeInLeft', {
  distance: '100px',
  origin: 'left',
  duration: 1500,
  easing: 'ease-in-out',
  delay: 150,
  reset: true, // Add this line to reset the animation on each scroll
});

ScrollReveal().reveal('.fadeInRight', {
  distance: '100px',
  origin: 'right',
  duration: 1500,
  easing: 'ease-in-out',
  delay: 150,
  reset: true, // Add this line to reset the animation on each scroll
});

// Additional ScrollReveal animations can be added for other elements

// Rest of your existing script
const translateX = document.querySelectorAll(".translateX");
const translateY = document.querySelectorAll(".translateY");
window.addEventListener("scroll", () => {
  let scroll = window.pageYOffset;
  translateX.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateX(${scroll * speed}px)`;
  })
  translateY.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  })
});

// Initialize Swiper
var swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});

function toggleAnswer(element) {
  const answer = element.nextElementSibling;

  // Toggle the 'active' class to trigger the transition
  answer.classList.toggle('active');
}




/* Subscribe script - Start */

document.addEventListener("DOMContentLoaded", function () {
  var subscribeSection = document.getElementById("subscribe");

  var options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5 // Change this threshold value based on your preference
  };

  var observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target);
      }
    });
  }, options);

  observer.observe(subscribeSection);
});

function validateEmail() {
  const email = document.getElementById('subscribe-email');
  const errorMessage = document.getElementById('email-error-message');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email.value.match(emailRegex)) {
    email.classList.remove('error-input');
    email.classList.add('valid-input');
    errorMessage.style.display = 'none';
    return true;
  } else {
    email.classList.remove('valid-input');
    email.classList.add('error-input');
    errorMessage.style.display = 'block';
    errorMessage.textContent = 'Please enter a valid email address.';
    return false;
  }
}

function validateForm() {
  return validateEmail();
}

/* Subscribe script - End */

document.addEventListener('DOMContentLoaded', function () {
  new WOW().init({
    offset: 100, // Adjust this value based on when you want the animation to trigger
    mobile: false, // Disable animation on mobile devices
    live: false // Disable live updates (useful when content is added dynamically)
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const nameField = document.querySelector(".name-field");
  const nameInput = document.querySelector(".name");
  const emailField = document.querySelector(".email-field");
  const emailInput = document.querySelector(".email");
  const numberField = document.querySelector(".number-field");
  const numberInput = document.querySelector(".number");

  // Email Validation
  function checkEmail() {
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailInput.value.match(emailPattern)) {
      emailField.classList.add("invalid");
    } else {
      emailField.classList.remove("invalid");
    }
  }

  // Name Validation
  function checkName() {
    // Allowing letters, spaces, and dots in the name
    const namePattern = /^[a-zA-Z\s.]+$/;
    if (!nameInput.value.match(namePattern)) {
      nameField.classList.add("invalid");
    } else {
      nameField.classList.remove("invalid");
    }
  }

  // Mobile Number Validation
  function checkNumber() {
    // You can define your own validation logic for the mobile number field
    // For example, ensure it's a valid mobile number format
    const numberPattern = /^\d{10}$/;
    if (!numberInput.value.match(numberPattern)) {
      numberField.classList.add("invalid");
    } else {
      numberField.classList.remove("invalid");
    }
  }

  // Form submit event
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    checkEmail();
    checkName();
    checkNumber();

    // Check if all fields are valid before redirecting
    if (!emailField.classList.contains("invalid") && !nameField.classList.contains("invalid") && !numberField.classList.contains("invalid")) {
      location.href = form.getAttribute("action");
    }
  });

  // Event listeners for keyup events
  emailInput.addEventListener("keyup", checkEmail);
  nameInput.addEventListener("keyup", checkName);
  numberInput.addEventListener("keyup", checkNumber);
});