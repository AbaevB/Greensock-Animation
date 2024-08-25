document.addEventListener('DOMContentLoaded', function () {

  let burger = document.querySelector(".burger");
  let menu = document.querySelector(".menu");
  let menuClose = document.querySelector(".close");
  let header = document.querySelector(".header");
  let menuLinks = document.querySelectorAll(".nav__link, .sub-menu__link, .social__link");

  let menuTop = document.querySelector(".menu__top");
  let navList = document.querySelector(".nav__list");
  let social = document.querySelector(".social");
  let menuRight = document.querySelector(".menu__right");

  let heroLeft = document.querySelector(".hero__left");
  let heroTitle = document.querySelector(".hero__title");
  let heroDescr = document.querySelector(".hero__descr");
  let photosAuthor = document.querySelector(".photos__author");
  let photo1 = document.getElementById("photo-1");
  let photo2 = document.getElementById("photo-2");
  let photo3 = document.getElementById("photo-3");

  let heroBtn = document.querySelector(".hero__btn");

  let tl = gsap.timeline({paused: false});

  tl.from(heroLeft, { opacity: 0, y: 300, duration: 2 })
    .from(heroTitle, { opacity: 0, y: 200, duration: 2 })
    .from(heroDescr, { opacity: 0, y: 200, duration: 3 })
    .from(photo1, { scale: 0.5, opacity: 0, duration: 2 })
    .from(photo2, { opacity: 0, scale: 0.5, duration: 2 })
    .from(photo3, { opacity: 0, scale: 0.5, duration: 2 })
    .from(photosAuthor, { opacity: 0, scale: 0.5, duration: 2 });


  let tl1 = gsap.timeline({ paused: true });


  tl1.from(navList, { y: 200, opacity: 0, duration: 1, scale: 0.5 })
    .from(social, { y: 200, opacity: 0, duration: 1 })
    .from(menuRight, { y: 200, opacity: 0, duration: 1 });

  burger.addEventListener('click', function(){
    menu.classList.add("menu--open");
    document.body.classList.add('stop-scroll');
    tl1.play();
  });


  menuClose.addEventListener('click', function () {
    tl1.reverse();
    setTimeout(() => {
      menu.classList.remove("menu--open");
      document.body.classList.remove('stop-scroll');
    }, 3000);

    });




  menuLinks.forEach(function (link) {
    tl1.reverse();
    setTimeout(() => {
      menu.classList.remove("menu--open");
      document.body.classList.remove('stop-scroll');
    }, 2000);
  });

});
