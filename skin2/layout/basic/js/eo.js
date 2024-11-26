
// 메인배너 슬라이드

var swiper = new Swiper(".mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

var newSwiper = new Swiper(".mySwiper.new-swiper", {
    slidesPerView: 5,
    spaceBetween: 20,
    loop: true,
    pagination: {
        el: ".new-swiper .swiper-pagination",
        clickable: true,
    },
});