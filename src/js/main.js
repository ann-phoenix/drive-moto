$(function () {

	/*Banner slider https://kenwheeler.github.io/slick/  */
	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 7000,
		fade: true,
	});

	/*Product slider*/
	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
		nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 5000,
	});

	/*Tabs*/
	$('.tab').on('click', function (e) {
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});

	/*Favorite active heart*/
	$('.product-item__favorite').on('click', function () {
		$(this).toggleClass('product-item__favorite--active')
	})

	/*Jquery form styler  http://dimox.name/jquery-form-styler/  */
	$('.filter-style').styler();

	/*Filter drop */
	$('.filter__item-drop').on('click', function () {
		$(this).toggleClass('filter__item-drop--active');
		$(this).next().slideToggle('200');
	})

	/*Filter btngrid and btnline */
	$('.catalog__filter-btngrid').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').removeClass('product-item__wrapper--line');
	})

	$('.catalog__filter-btnline').on('click', function () {
		$(this).addClass('catalog__filter-button--active');
		$('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
		$('.product-item__wrapper').addClass('product-item__wrapper--line');
	})

	/*ion.rangeSlider http://ionden.com/a/plugins/ion.rangeSlider/ */
	$('.js-range-slider').ionRangeSlider({
		type: 'double',
		min: 500000,
		max: 2900000,
	});

	/*Rate Yo! https://rateyo.fundoocode.ninja/ */
	$('.rate-yo').rateYo({
		readOnly: true,
		spacing: "7px",
		ratedFill: "#1c62cd",
		normalFill: "#c4c4c4",
		starWidth: "23px",
	});

});