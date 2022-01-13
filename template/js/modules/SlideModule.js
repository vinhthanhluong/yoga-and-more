export default function SlideModule() {
    function slide() {
        let width = $(window).width();
        //console.log(width);
        if (width <= 1200 && document.querySelector('#slide-home')) {
            const swiper = document.querySelector('#slide-home');
            const sliderContainer = swiper.querySelector('.swiper-container');
            const SliderPagination = swiper.querySelector('.swiper-pagination-orange');
            const sliderPrevBtn = swiper.querySelector('.swiper-prev');
            const sliderNextBtn = swiper.querySelector('.swiper-next');
            try {
                const swiper = new Swiper(sliderContainer, {
                    speed: 1000,
                    loop: true,
                    // autoHeight: true,
                    //spaceBetween: 20,
                    autoplay: {
                        delay: 4000,
                    },
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },

                    // navigation: {
                    //     nextEl: '.swiper-button-next',
                    //     prevEl: '.swiper-button-prev',
                    // },

                    breakpoints: {
                        // 320: {
                        //     spaceBetween: 50
                        // },
                        // 480: {
                        //     spaceBetween: 30
                        // },
                        // 576: {
                        //     spaceBetween: 0,

                        // }
                    }
                    // observeParents:true,
                    // observeSlideChildren: true,
                    // observer: true,
                })
            }
            catch (err) {
                console.log(err)
            }

        }
    }

    $(window).on("resize", function () {
        slide;
    });


    if (document.querySelector('#slide-banner')) {
        const swiper = document.querySelector('#slide-banner');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
            })
        }
        catch (err) {
            console.log(err)
        }
    }

    if (document.querySelector('#slide-featured')) {
        const swiper = document.querySelector('#slide-featured');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },

                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    500: {
                        spaceBetween: 10,
                        slidesPerView: 2,
                    },
                    768: {
                        spaceBetween: 15,
                        slidesPerView: 3,
                    },
                    1024: {
                        spaceBetween: 30,
                        slidesPerView: 4,
                    }
                }
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-icourse1')) {
        const swiper = document.querySelector('#slide-icourse1');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 5,
                slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                observeParents:true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-icourse2')) {
        const swiper = document.querySelector('#slide-icourse2');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observeParents:true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-icourse3')) {
        const swiper = document.querySelector('#slide-icourse3');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observeParents:true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-icourse4')) {
        const swiper = document.querySelector('#slide-icourse4');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observeParents:true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-icourse5')) {
        const swiper = document.querySelector('#slide-icourse5');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 5,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },
                observeParents:true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    if (document.querySelector('#slide-asd')) {
        const swiper = document.querySelector('#slide-icourse1');
        const sliderContainer = swiper.querySelector('.swiper-container');
        const SliderPagination = swiper.querySelector('.swiper-pagination');
        const sliderPrevBtn = swiper.querySelector('.swiper-button-prev');
        const sliderNextBtn = swiper.querySelector('.swiper-button-next');
        try {
            const swiper = new Swiper(sliderContainer, {
                speed: 1000,
                loop: true,
                spaceBetween: 10,
                // autoplay: {
                //     delay: 4000,
                // },
                // slidesPerView: 1,
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true,
                },

                // navigation: {
                //     nextEl: '.swiper-button-next',
                //     prevEl: '.swiper-button-prev',
                // },

                // breakpoints: {
                //     320: {
                //         slidesPerView: 1,
                //         spaceBetween: 10,
                //     },
                //     500: {
                //         spaceBetween: 10,
                //         slidesPerView: 2,
                //     },
                //     768: {
                //         spaceBetween: 15,
                //         slidesPerView: 3,
                //     },
                //     1024: {
                //         spaceBetween: 30,
                //         slidesPerView: 4,
                //     }
                // }
                observeParents:true,
                observeSlideChildren: true,
                observer: true,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
   
}