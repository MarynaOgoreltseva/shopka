$(document).ready(function () {
	$('.aside-nav').hide();
	$('.aside-nav .aside-nav__submenu').hide();
	$('.aside-nav__subitems .aside-nav__tel').hide();
	$('.aside-nav__submenu .aside-nav__subitems').hide();

	$('.aside-checking__list').hide();
	$('.aside-checking__title').on('click', accordion);
	$( ".aside-checking__title, .aside-checking" ).on( "click", function() {
		$( this ).toggleClass( "open" );
	});

	$('.btn-link_mob').click(function() {
	        $('.aside-menu,.logo-mob').toggleClass('is-active');
	});
	
	$('.btn_list').click(function() {
        $('.section,.content-grid,.content-card').addClass('is-product-list');
	});
	$('.btn_flex').click(function() {
        $('.section,.content-grid,.content-card').removeClass('is-product-list');
    });
	
	$('.btn-link_aside-btn-link').on('click', accordion);
	$('.aside-nav .aside-nav__item-link').on('click', accordion);
	$('.aside-nav .aside-nav__subitems-link').on('click', accordion);

	function accordion(){
		$(this).next().slideToggle(1000);
		
	}
	
	$('.categories__list').slick({
		dots: true,
		initialSlide: 1,
  		speed: 300,
		variableWidth: true,
		
	});

})