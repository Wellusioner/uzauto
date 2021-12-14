"use strict";
const backTop = document.querySelector(".back-top");

const bannerSlider = new Swiper(".banner-carousel", {
	loop: true,
//	autoplay: true,
	pagination: {
    el: '.swiper-pagination',
  },
  navigation: {
    nextEl: '.banner-carousel .swiper-button-next',
    prevEl: '.banner-carousel .swiper-button-prev',
  }
});

backTop.addEventListener("click", function(){
	window.scrollTo({
		top: 0,
		behavior: "smooth"
	});
});

window.addEventListener("scroll", function(){
	console.log(window.scrollY)
	if(window.scrollY > 150){
		backTop.classList.add("active");
	}else{
		backTop.classList.remove("active");
	}
});