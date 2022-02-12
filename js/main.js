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
let navBtn = document.getElementById('tgl-btn');
let closeBtn = document.getElementById('close-tgl')

let tglDiv = document.querySelector('.toggleNav')

let closeNav = document.querySelectorAll('.close-nav');
for (i = 0; i < closeNav.length; i++) {
  closeNav[i].addEventListener('click', () => {
    tglDiv.style.display = "none";
  });
}

navBtn.addEventListener('click', () => {
  tglDiv.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  tglDiv.style.display = 'none';
});
