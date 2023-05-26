$(document).ready(function() {
    $('.aside-nav .aside-nav__submenu').hide();
    $('.aside-nav .aside-nav__item-link').on('click', accordion);
});

$(document).ready(function() {
    $('.aside-nav__submenu .aside-nav__subitems').hide();
    $('.aside-nav .aside-nav__item-link').on('click', accordion);
});

function accordion(){
    $(this).next().slideToggle(1000);
}