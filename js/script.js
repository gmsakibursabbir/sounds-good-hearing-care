// Initialize desktop slider
$(document).ready(function () {
  $(".slick-slider-desktop").slick({
    // Your slick options here
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    dotsClass: "slick-dots",
    arrows: false,
    infinite: true,
    easing: "ease-in-out",
    speed: 500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });

  AOS.init();
});

// Initialize mobile slider

// Initialize video slider
$(document).ready(function () {
  $('#video-slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});

// review
$('#review-slider').slick({
  infinite: true,
  centerMode: true,
  centerPadding: '40px',
  slidesToShow: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  dots: true,
  pauseOnHover: true,
  pauseOnFocus: true,
  easing: 'ease-in-out',
  speed: 500,
  useTransform: true,
  cssEase: 'ease-in-out',
});
// form validate

// Get the form element
const form = document.getElementById('form');

// Define validation rules
const validationRules = {
  name: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z ]+$/,
  },
  mobile: {
    required: true,
    pattern: /^\d{10}$/,
  },
  email: {
    required: true,
    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
  },
  city: {
    required: true,
    minLength: 2,
    maxLength: 50,
    pattern: /^[a-zA-Z ]+$/,
  },
  selectOption: {
    required: true,
  },
};

// Define error messages
const errorMessages = {
  name: {
    required: 'Please enter your name',
    minLength: 'Name should be at least 2 characters long',
    maxLength: 'Name should not be more than 50 characters long',
    pattern: 'Name should only contain letters and spaces',
  },
  mobile: {
    required: 'Please enter your mobile number',
    pattern: 'Mobile number should be 10 digits long',
  },
  email: {
    required: 'Please enter your email address',
    pattern: 'Email address should be in a valid format',
  },
  city: {
    required: 'Please enter your city',
    minLength: 'City should be at least 2 characters long',
    maxLength: 'City should not be more than 50 characters long',
    pattern: 'City should only contain letters and spaces',
  },
  selectOption: {
    required: 'Please select a mode of consultation',
  },
};

// Function to validate form fields
function validateField(field) {
  const value = field.value.trim();
  const rules = validationRules[field.id];
  const errors = [];

  if (rules.required && !value) {
    errors.push(errorMessages[field.id].required);
  }

  if (rules.minLength && value.length < rules.minLength) {
    errors.push(errorMessages[field.id].minLength);
  }

  if (rules.maxLength && value.length > rules.maxLength) {
    errors.push(errorMessages[field.id].maxLength);
  }

  if (rules.pattern && !rules.pattern.test(value)) {
    errors.push(errorMessages[field.id].pattern);
  }

  if (errors.length > 0) {
    const errorElement = document.getElementById(`${field.id}Error`);
    errorElement.innerText = errors.join(', ');
    errorElement.classList.add('visible');
  } else {
    const errorElement = document.getElementById(`${field.id}Error`);
    errorElement.innerText = '';
    errorElement.classList.remove('visible');
  }

  return errors.length === 0;
}

// Function to validate the entire form
function validateForm() {
  const fields = Array.from(form.elements);
  let isValid = true;

  fields.forEach(field => {
    if (field.tagName === 'INPUT' || field.tagName === 'SELECT') {
      if (!validateField(field)) {
        isValid = false;
      }
    }
  });

  return isValid;
}

// Add event listeners to form fields
form.addEventListener('input', event => {
  if (event.target.tagName === 'INPUT' || event.target.tagName === 'SELECT') {
    validateField(event.target);
  }
});

// Add event listener to form submit
form.addEventListener('submit', event => {
  if (!validateForm()) {
    event.preventDefault();
  }
});

// video replacement

