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
        $('.mob-menu,.wrap_header').toggleClass('is-active');
    });
	
	$('.btn-link_aside-btn-link').on('click', accordion);
	$('.aside-nav .aside-nav__item-link').on('click', accordion);
	$('.aside-nav .aside-nav__subitems-link').on('click', accordion);

	function accordion(){
    $(this).next().slideToggle(1000);
}
})