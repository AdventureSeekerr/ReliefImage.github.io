window.onload = function () {
    $('.main-slider').slick({
        variableWidth: true,
        nextArrow: '<img src="/images/right-arrow-big.png" alt="" class="main-next">',
        prevArrow: '<img src="/images/left-arrow-big.png" alt="" class="main-prev">'
    });
    $('.child-slider__slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        asNavFor: '.child-slider__slider-nav',
        responsive: [{
            breakpoint: 768,
            arrows: true,
            prevArrow: '<div class="prev-main"><img src="/images/left-arrows.png" alt="" style="cursor: pointer;"></div>',
            nextArrow: '<div class="next-main"><img src="/images/right-arrows.png" alt="" style="cursor: pointer;"></div>'
        }]
    });
    $('.child-slider__slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.child-slider__slider-for',
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true,
        prevArrow: '<div class="prev"><img src="/images/left-arrows.png" alt="" style="cursor: pointer;"></div>',
        nextArrow: '<div class="next"><img src="/images/right-arrows.png" alt="" style="cursor: pointer;"></div>',
        responsive: [{
            breakpoint: 767,
            settings: 'unslick'
        }]
    });
    $('.reviews__row-slider').slick({
        responsive: [{
            breakpoint: 100000,
            settings: 'unslick'
        },
        {
            breakpoint: 768,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        },
        {
            breakpoint: 321,
            variableWidth: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true
        }
        ],
        prevArrow: '<img src="/images/left-arrow-big.png" alt="" class="reviews-prev">',
        nextArrow: '<img src="/images/right-arrow-big.png" alt="" class="reviews-next">'
    });
    function popup() {
        let closeOverlay = document.querySelector('.overlay');
        let close2 = document.querySelectorAll('.popup-close2');
        let open2 = document.querySelectorAll('.our-projects__link');
        let modal2 = document.querySelector('.modal-2')
        document.querySelector('.hero__link').addEventListener('click', (e) => {
            document.querySelector('.modal').style.display = 'block';
        });
        closeOverlay.addEventListener('click', (e) => {
            document.querySelector('.modal').style.display = 'none';
        });
        for (let i = 0; i < open2.length; i++) {
            open2[i].addEventListener('click', (e) => {
                modal2.style.display = 'block';
            })
        }
        for (let j = 0; j < close2.length; j++) {
            close2[j].addEventListener('click', (e) => {
                modal2.style.display = 'none'
            })
        }
    };
    popup()
    let items = document.querySelectorAll('.garden__items');
    items.forEach(item => {
        item.addEventListener('click', (e) => {
            items.forEach(el => {
                el.classList.remove('garden--orange');
            })
            item.classList.add('garden--orange');
        });
    });
    let list = document.querySelectorAll('.garden__descr');
    let dscr1 = document.querySelector('.garden__descr-1');
    let dscr2 = document.querySelector('.garden__descr-2');
    let dscr3 = document.querySelector('.garden__descr-3');
    let dscr4 = document.querySelector('.garden__descr-4');
    document.querySelector('.garden__items-1').addEventListener('click', (e) => {
        list.forEach(p => {
            list.forEach(el => {
                el.style.display = 'none'
            })
            dscr1.style.display = 'block'
        })
    })
    document.querySelector('.garden__items-2').addEventListener('click', (e) => {
        list.forEach(p => {
            list.forEach(el => {
                el.style.display = 'none'
            })
            dscr2.style.display = 'block'
        })
    })
    document.querySelector('.garden__items-3').addEventListener('click', (e) => {
        list.forEach(p => {
            list.forEach(el => {
                el.style.display = 'none'
            })
            dscr3.style.display = 'block'
        })
    })
    document.querySelector('.garden__items-4').addEventListener('click', (e) => {
        list.forEach(p => {
            list.forEach(el => {
                el.style.display = 'none'
            })
            dscr4.style.display = 'block'
        })
    });
    let arrow = document.querySelector('.landscape__img-arrow');
    let arrowUp = document.querySelector('.landscape__arrow-up');
    arrow.addEventListener('click', (e) => {
        let items = document.querySelectorAll('.landscape__items--adaptiv');
        items.forEach(el => {
            el.style.display = 'block'
        });
        arrow.style.display = 'none'
        arrowUp.style.display = 'block'
    })
    arrowUp.addEventListener('click', (e) => {
        let items = document.querySelectorAll('.landscape__items--adaptiv');
        items.forEach(el => {
            el.style.display = 'none'
        });
        arrow.style.display = 'block'
        arrowUp.style.display = 'none'
    });

    let menuBtn = document.querySelector('.menu-btn')
    let burgerNav = document.querySelector('.burger__nav')
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('active');
        burgerNav.classList.toggle('active');
    });
    let arrowUpp = document.querySelector('.about-company__arrow-up');
    let arrowDown = document.querySelector('.about-company__arrow-down');
    let mobileText = document.querySelector('.about__company-mobile');
    arrowDown.addEventListener('click', function () {
        mobileText.style.display = 'block';
        arrowUpp.style.display = 'block';
        arrowDown.style.display = 'none';
    });
    arrowUpp.addEventListener('click', function () {
        mobileText.style.display = 'none';
        arrowDown.style.display = 'block';
        arrowUpp.style.display = 'none';
    })
};