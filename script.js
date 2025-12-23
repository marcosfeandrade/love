$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        fade: false,
        adaptiveHeight: true
    });
});

function scrollToNext() {
    const photosSection = document.querySelector('.photos');
    if (photosSection) {
        photosSection.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

