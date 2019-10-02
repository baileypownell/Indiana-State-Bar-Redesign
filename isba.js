(function(){

// parallax effect for home image

$(window).scroll(function() {
  parallax();
})

const parallax = () => {
  let wScroll = $(window).scrollTop();
  $('.parallax').css('background-position', 'center '+(wScroll*-0.5)+'px')
}


// hiding the dropdown items, which are all in six unordered lists, but keeping the main options visible of course
 $('.dropdownparent li').hide();

const openNav = () => {
  document.getElementById("myNav").style.width = "100%";
  $('.overlay-content').hide().fadeIn(1500);
}

const closeNav = () => {
  document.getElementById("myNav").style.width = "0%";
  $('.overlay-content').hide().fadeOut(1500);
}

// functionality to show dropdown options

$('.dropdownparent').on('click', function() {
  $(this).find("li").fadeToggle(700);
});

$('#home').fadeIn();

// Events
let hamburger = document.getElementById('hamburger');
console.log(hamburger);
hamburger.addEventListener('click', openNav);

let closeMenu = document.getElementById('close-button-container');
closeMenu.addEventListener('click', closeNav);


// animations for fading in and resizing: https://eddyerburgh.me/animate-elements-scrolled-view-vanilla-js

const animateHTML = () => {
  let elems;
  let windowHeight;
  const init = () => {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  const addEventHandlers = () => {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  const checkPosition = () => {
    for (let i = 0; i < elems.length; i++) {
      let positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();

// animation for fading in and out on scroll:

$(document).on("scroll", function () {
  let pageTop = $(document).scrollTop()
  let pageBottom = pageTop + $(window).height()
  let tags = $("section")
  for (let i = 0; i < tags.length; i++) {
   let tag = tags[i];
   if ($(tag).position().top < pageBottom) {
      $(tag).addClass("visible")
    } else {
      $(tag).removeClass("visible")
    }
  }
})
})();
