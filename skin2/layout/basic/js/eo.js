
// 메인배너 슬라이드

var swiper = new Swiper("#main-slide.mySwiper", {
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
        el: "#main-slide .swiper-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: "#main-slide .swiper-button-next",
        prevEl: "#main-slide .swiper-button-prev",
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

    const giftSwiper = new Swiper("#gift-swiper .mySwiper", {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 24,
        centeredSlides: true,
        navigation: {
            nextEl: "#gift-swiper .swiper-button-next",
            prevEl: "#gift-swiper .swiper-button-prev",
        },
    });
}, 500);

// 미들배너 슬라이드

var middleSwiper = new Swiper("#middle-swiper.mySwiper", {
    loop: true,
    navigation: {
        nextEl: "#middle-swiper .swiper-button-next",
        prevEl: "#middle-swiper .swiper-button-prev",
    },
});

// 리뷰 슬라이드

var reviewSwiper = new Swiper("#review-swiper .mySwiper", {
    loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    centeredSlides: true,
    navigation: {
        nextEl: "#review-swiper .swiper-button-next",
        prevEl: "#review-swiper .swiper-button-prev",
    },
});
