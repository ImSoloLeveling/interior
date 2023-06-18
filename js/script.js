"use strict";

document.addEventListener("click", documentClick);

function documentClick(e) {
    const targetItem = e.target;

    if (targetItem.closest(".icon-menu")) {
        document.documentElement.classList.toggle("menu-open");
        document.body.classList.toggle("lock");
    };
};

const productsSwiper = document.querySelector('.swiper-products');

if (productsSwiper) {
    const swiper = new Swiper('.swiper-products', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: true,
        // loop: true,
        // If we need pagination
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 2,
            },
            1290: {
                slidesPerView: 2,
            },
            1320: {
                slidesPerView: 3
            }
        }
    });
};

const articlesSwiper = document.querySelector('.swiper-articles');

if (articlesSwiper) {
    const swiper = new Swiper('.swiper-articles', {
        // Optional parameters
        slidesPerView: 3,
        spaceBetween: 30,
        autoHeight: true,
        // loop: true,
        // If we need pagination
        navigation: {
            nextEl: '.articles__button-next',
            prevEl: '.articles__button-prev',
            // nextEl: '.swiper-button-next',
            // prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            576: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 2,
            },
            1199: {
                slidesPerView: 2,
            },
            1290: {
                slidesPerView: 2,
            },
            1320: {
                slidesPerView: 3
            }
        }
    });
}