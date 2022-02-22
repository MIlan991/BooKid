//SCROLL NAV
const body = document.body;
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll <= 0){
        body.classList.remove("scroll-up")
    }
    
    if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-up")
        body.classList.add("scroll-down")
    }

    if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
        body.classList.remove("scroll-down")
        body.classList.add("scroll-up")
    }

    lastScroll = currentScroll;
});


//SMOOTH SCROLL
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 800);
        return false;
      }
    }
  });
});

//BURGER MENU
const navBtn = document.getElementById('tgl-btn');
const checkBox = document.getElementById("burger3");
const navBar = document.querySelector('#myNav');
const closeNav = document.querySelectorAll('.close-nav');

// TOGGLEE NAV 
for (i = 0; i < closeNav.length; i++) {
  closeNav[i].addEventListener('click', () => {
    navBar.style.display = "none";
    checkBox.checked = false;
  });
}

// OPEN AND CLOSE NAVBAR
function openCloseNav() {
  if (checkBox.checked == true){
    navBar.style.display = "block";
  } else {
    navBar.style.display = "none";
  }
}

//FORMS CHECK
document.getElementById("registration_form").onsubmit = function () {
  const nameForm = document.forms["registration_form"]["name"].value;
  const emailForm = document.forms["registration_form"]["email"].value;
  const titleForm = document.forms["registration_form"]["telephone"].value;
  const messageForm = document.forms["registration_form"]["comment"].value;
  const submitMessage = document.getElementById('button_error');

  let messageError = false;
  let submit = true;

  if (nameForm == null || nameForm == "") {
      nameError = "The field is required.";
      document.getElementById("name_error").innerHTML = nameError;
      submitMessage.innerHTML = 'One or more fields have an error. Please check and try again.';
      submit = false;
  }

  if (emailForm == null || emailForm == "") {
      emailError = "The field is required.";
      document.getElementById("email_error").innerHTML = emailError;
      submitMessage.innerHTML = 'One or more fields have an error. Please check and try again.';
      submit = false;
  }

  if (titleForm == null || titleForm == "") {
      titleError = "The field is required.";
      document.getElementById("telephone_error").innerHTML = titleError;
      submitMessage.innerHTML = 'One or more fields have an error. Please check and try again.';
      submit = false;
  }

  if (messageForm == null || messageForm == "") {
      messageError = "The field is required.";
      document.getElementById("comment_error").innerHTML = messageError;
      submitMessage.innerHTML = 'One or more fields have an error. Please check and try again.';
      submit = false;
  }
  
  return submit;
}

function removeWarning() {
  document.getElementById(this.id + "_error").innerHTML = "";
}

document.getElementById("name").onkeyup = removeWarning;
document.getElementById("email").onkeyup = removeWarning;
document.getElementById("telephone").onkeyup = removeWarning;
document.getElementById("comment").onkeyup = removeWarning;