
// 메인배너 슬라이드

var swiper = new Swiper("#main_slide.mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: "#main_slide .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#main_slide .swiper-button-next",
        prevEl: "#main_slide .swiper-button-prev",
    },
});

// 신상품 슬라이드
var newSwiper = new Swiper(".mySwiper.new-swiper", {
    loop: true,
    slidesPerView: 5,
    slidesPerGroup: 5,    
    spaceBetween: 20, 
    loopAdditionalSlides: 5,  
    pagination: {
        el: ".new-swiper .swiper-pagination",
        clickable: true,
    },
});