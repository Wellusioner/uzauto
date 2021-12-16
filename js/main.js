"use strict";
const html = document.querySelector("html");
const menuList = document.querySelectorAll(".menu-group .has-submenu");

const searchContent = document.querySelector(".search-content");
const searchInput = document.querySelector(".search-input");
const searchToggler = document.querySelectorAll(".search-toggle");
const backTop = document.querySelector(".back-top");
const autoMenuList = document.querySelectorAll(".auto-menu .auto-item");

menuList.forEach(function(item){
	item.addEventListener("click", function(e){
		if(item.classList.contains("active")){
			 if(e.target.classList.contains("menu-item")){
					item.classList.remove("active");
				}
		 }else{
			 item.classList.add("active");
		 }
	});
	item.addEventListener("mouseleave", function(){
		item.classList.remove("active");
	});
});

searchToggler.forEach(function(item){
	item.addEventListener("click", function(){
		searchContent.classList.toggle("active");
		html.classList.toggle("overflowed");
		if(searchContent.classList.contains("active")){
	 		searchInput.focus();
	 	}
	});
});

autoMenuList.forEach(function(item){
	item.addEventListener("click", function(){
		if(!item.classList.contains("active")){
			
	 		const autoToBeOut = document.querySelector(".selected-auto-img.active");
			const autoToBeIn = document.querySelector("[data-auto-id='"+ item.getAttribute("data-id") +"']");
			console.log("[data-auto-id='"+ item.getAttribute("data-id") +"']");
		
			document.querySelector(".auto-menu .auto-item.active").classList.remove("active");
			item.classList.add("active");

			document.querySelector("#selected-auto-name").textContent = item.getAttribute("data-name");
			document.querySelector("#selected-auto-price").textContent = item.getAttribute("data-price");

			autoToBeIn.classList.add("active");
			autoToBeOut.classList.remove("active");
			autoToBeOut.classList.add("out");

			setTimeout(function(){
				autoToBeOut.classList.remove("out");
			}, 500);
	 	}
	});
});

const bannerSlider = new Swiper(".banner-carousel", {
	loop: true,
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
	if(window.scrollY > 150){
		backTop.classList.add("active");
	}else{
		backTop.classList.remove("active");
	}
});