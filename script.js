$(document).ready(function () {
  $(window).scroll(function () {
    // sticky navbar on scroll script
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }

    // scroll-up button show/hide script
    if (this.scrollY > 500) {
      $(".scroll-up-btn").addClass("show");
    } else {
      $(".scroll-up-btn").removeClass("show");
    }
  });

  // slide-up script
  $(".scroll-up-btn").click(function () {
    $("html").animate({ scrollTop: 0 });
    // removing smooth scroll on slide-up button click
    $("html").css("scrollBehavior", "auto");
  });

  $(".navbar .menu li a").click(function () {
    // applying again smooth scroll on menu items click
    $("html").css("scrollBehavior", "smooth");
  });
  //like btn
  $(".like-btn").click(function (){
    document.getElementById("like-btn").innerHTML = "<i style='font-size:24px' class='fa'>&#xf004;</i> Liked";
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Android Developer", "Web Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing_name", {
    strings: ["Jagan S"],
    typeSpeed: 150,
    // onComplete: function () {
    //   $(".typed-cursor").hide();
    // },
  });

  var typed = new Typed(".typing-2", {
    strings: ["Android Developer", "Web Developer", "Java Developer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });



  // owl carousel script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: false,
      },
    },
  });
});

// mail-form-actions
function submitMail(){
  alert("Thanks for your message...\nThe page will be reloaded.");
}

