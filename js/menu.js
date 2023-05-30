$(document).ready(function () {
	$('.aside-nav .aside-nav__submenu').hide();
	$('.aside-nav__subitems .aside-nav__tel').hide();
	$('.aside-nav__submenu .aside-nav__subitems').hide();
	$('.aside-nav .aside-nav__item-link').on('click', accordion);
	$('.aside-nav .aside-nav__subitems-link').on('click', accordion);

	// $('.aside-nav').click(function() {
    //     $('.icon_chevron-right').toggleClass('active');
    // });

	const list = document.querySelectorAll('.aside-nav li a .icon_chevron-right')
 list.forEach(item =>{ 
        item.addEventListener('click', (e) =>{
        list.forEach(el=>{ el.classList.remove('icon_chevron-active'); });
        item.classList.add('icon_chevron-active')
    })
})

	function accordion(){
    $(this).next().slideToggle(1000);
}
})