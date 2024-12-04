
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

setTimeout(()=> {
    const bathSwiper = new Swiper("#bath .bath-swiper", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20, 
        pagination: {
            el: "#bath .swiper-pagination",
            clickable: true,
        },
    });

    const showerSwiper = new Swiper("#shower .shower-swiper", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20, 
        pagination: {
            el: "#shower .swiper-pagination",
            clickable: true,
        },
    });
    
    const bodySwiper = new Swiper("#body .body-swiper", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20, 
        pagination: {
            el: "#body .swiper-pagination",
            clickable: true,
        },
    });

    const hairSwiper = new Swiper("#hair .hair-swiper", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 20, 
        pagination: {
            el: "#hair .swiper-pagination",
            clickable: true,
        },
    });
}, 500);
