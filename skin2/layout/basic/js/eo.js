$(function(){
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 0){
            $('#header').addClass('fix');
        }else{
            $('#header').removeClass('fix');
        }
    });
    $(window).on('resize', function() {
        // 필요에 따라 헤더의 상태를 재조정
        if ($(window).scrollTop() > 0) {
            $('#header').addClass('fix');
        } else {
            $('#header').removeClass('fix');
        }
    });
    
    jQuery(window).scroll(function() {
		var header_height = jQuery('#header .topArea').innerHeight();
		var jh_offset = jQuery('.tabProduct_box').offset();
		if ((jQuery(document).scrollTop() + header_height) >= jh_offset.top ) {
			jQuery('#tabProduct').addClass('tab_fixed');
			jQuery('#tabProduct').css('top',header_height + 0);
		} else {
			jQuery('#tabProduct').removeClass('tab_fixed');
		}
	});

    // 상품상세 탭 이벤트
    $('#tabProduct a').click(function(e){
		var header_height = jQuery('#header .topArea').innerHeight();
        var oTarget = $(this).attr('href');
		var offset = $('.xans-product-additional').offset(); //선택한 태그의 위치를 반환
		$('html').animate({scrollTop : offset.top - header_height}, 400);
        $(this).parent('li').addClass('selected').siblings().removeClass('selected');
        $('#tabProduct a').each(function(){
            var oSiblings = $(this).attr('href');
            if (oTarget != oSiblings) {
                $(oSiblings).hide();
            } else {
                $(oTarget).show();
            }
        });
        removePagingArea(oTarget);
        if(e) e.preventDefault();
    });
});

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

    const giftSwiper = new Swiper("#gift .gift-swiper", {
        loop: true,
        slidesPerView: 'auto',
        spaceBetween: 24,
        centeredSlides: true,
        navigation: {
            nextEl: "#gift .gift-swiper .swiper-button-next",
            prevEl: "#gift .gift-swiper .swiper-button-prev",
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

// 셀렉트 박스

var selectList = document.getElementById('select-list');
var selectTitleBox = document.querySelector('.select-title-box');

if (selectList && selectTitleBox) {
    selectTitleBox.addEventListener('click', function() {
        selectList.classList.toggle('cd-none');
        selectTitleBox.classList.toggle('active');
    });
}
