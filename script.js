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
  $(".like-btn").click(function () {
    document.getElementById("like-btn").innerHTML =
      "<i style='font-size:24px' class='fa'>&#xf004;</i> Liked";
  });

  // toggle menu/navbar script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });

  // typing text animation script
  var typed = new Typed(".typing", {
    strings: ["Android Developer", "Flutter Developer", "Web Developer"],
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
    strings: ["Android Developer","Flutter Developer", "Web Developer"],
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
function submitMail() {
  alert("Thanks for your message...\nThe page will be reloaded.");
}

// project list
document.addEventListener("DOMContentLoaded", function () {
  const projects = [
    {
      name: "SyncTasks",
      link: "https://github.com/jagans27/SyncTasks",
      iconClass: "fa fa-list",
      description:
        "An app that is used to manage tasks with AI score, images, and biometrics",
    },
    {
      name: "Blind Master App",
      link: "https://github.com/jagans27/Blind_Master_App",
      iconClass: "fa fa-blind",
      description:
        "An app that helps blind people hear what's in front of them.",
    },
    {
      name: "Track My Wheels",
      link: "https://github.com/jagans27/Track_My_Wheels",
      iconClass: "fa fa-bus",
      description: "Bus Tracking app which will work on GPS and Google Map.",
    },
    {
      name: "Book Hub App",
      link: "https://github.com/jagans27/Book-Hub-Android-App",
      iconClass: "fa fa-book",
      description:
        "An Android application that shows the price of a book along with a description of the book.",
    },
    {
      name: "Home Inventory Manager",
      link: "https://github.com/jagans27/Home-Inventory-Manager",
      iconClass: "fas fa-home",
      description:
        "An application helps you keep track of your home's valuables.",
    },
    {
      name: "Public Chat System",
      link: "https://github.com/jagans27/Public-Chat-System",
      iconClass: "fas fa-sms",
      description:
        "This is a website where you can chat anonymously with the public.",
    },
    {
      name: "Social Networking",
      link: "https://github.com/jagans27/Social-Networking",
      iconClass: "fas fa-quote-left",
      description: "A web application that connects people around the world.",
    },
    {
      name: "ATM Simulation System",
      link: "https://github.com/jagans27/ATM-Simulation-System",
      iconClass: "fa fa-credit-card",
      description: "An application that simulates the work of an ATM.",
    },
  ];
  const projectContainer = document.getElementById("projectContainer");

  projects.forEach((project) => {
    const card = document.createElement("a");
    card.classList.add("card");
    card.href = project.link;
    card.target = "_blank";

    card.innerHTML = `
    <div class="box">
    <i class="${project.iconClass}"></i>
    <div class="text"><a href="${project.link}" target="_blank">${project.name}</a></div>
    <p>${project.description}</p>
</div>
`;

    projectContainer.appendChild(card);
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const skills = [
    "Java",
    "Kotlin",
    "Python",
    "C/C++",
    "HTML/CSS",
    "JavaScript",
    "PHP",
    "React Js",
    "Node Js",
    "MySQL",
    "MongoDB",
    "Firebase",
    "Jetpack Compose",
    "Flutter"
    // Add more skills as needed
  ];

  // Function to create skill cards
  function createSkillCards() {
    const skillContent = document.getElementById("skillContent");

    skills.forEach((skill) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.textContent = skill;

      skillContent.appendChild(card);
    });
  }

  // Call the function to create skill cards
  createSkillCards();
});
