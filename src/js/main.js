$(function () {

	/*Banner slider*/
 $('.banner-section__slider').slick({
	 dots: true,
	 prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icons/arrow-left.svg" alt=""></button>',
	 nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icons/arrow-right.svg" alt=""></button>',
 });

 /*Product slider*/
 $('.product-slider').slick({
	 slidesToShow: 4,
	 slidesToScroll: 1,
	 prevArrow: '<button class="product-slider__slider-btn product-slider__slider-btnprev"><img src="images/icons/arrow-black-left.svg" alt=""></button>',
	 nextArrow: '<button class="product-slider__slider-btn product-slider__slider-btnnext"><img src="images/icons/arrow-black-right.svg" alt=""></button>',

 });

 /*Tabs*/
 $('.tab').on('click', function(e){
	 e.preventDefault();

	 $($(this).siblings()).removeClass('tab--active');
	 $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

	 $(this).addClass('tab--active');
	 $($(this).attr('href')).addClass('tabs-content--active');
 });

/*Favorite active heart*/
 $('.product-item__favorite').on('click', function(){
	 $(this).toggleClass('product-item__favorite--active')
 })

 /*Rate Yo! and filter*/
 $('.filter-style').styler();


 $('.filter__item-drop').on('click', function(){
	 $(this).toggleClass('filter__item-drop--active');
	 $(this).next().slideToggle('200');
 })

});