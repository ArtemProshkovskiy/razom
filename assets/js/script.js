const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: window.matchMedia("(min-width: 1030px)").matches,
});

const mediaQuery = window.matchMedia("(max-width: 1030px)");

mediaQuery.addListener((mq) => {
    scroll.smooth = !mq.matches;
});

const swiper = new Swiper('.swiper.team', {
    loop: true,
    // If we need pagination
    pagination: {
        el: '.swiper-pagination.team',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next.team',
        prevEl: '.swiper-button-prev.team',
    },
    slidesPerView: "auto",
    centeredSlides: true,
    watchOverflow: true,
    initialSlide: 2,
    spaceBetween: 20,


    breakpoints: {
        768: {
           slidesPerView: 3,
            centeredSlides: true,
            watchOverflow: true,
            initialSlide: 1,
             spaceBetween: 50,
        },

        1030: {
            slidesPerView: 3,
            centeredSlides: true,
            watchOverflow: true,
            initialSlide: 1,
            spaceBetween: 108,
        }
    },
});


// const media = window.matchMedia("(max-width: 768px)");
// function handlePhone(e) {
//   if (e.matches) {
//     swiper.params.spaceBetween = 160;
//     swiper.update();
//   } else {
//     swiper.params.spaceBetween = 121;
//     swiper.update();
//   }
// }
//
// media.addListener(handlePhone);
// handlePhone(media);


const targetElement = document.querySelector('.animation');
const video = document.querySelector('iframe');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            targetElement.classList.add('active');
            video.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
});


observer.observe(targetElement);
const languageButton = document.querySelector('.menu-social__lang-button')
const languagePopup = document.querySelector('.menu-social__lang')
const language = document.querySelector('.menu-social__lang-drop a');

languageButton.addEventListener('click', function (e) {
    languagePopup.classList.toggle('active');
});

document.addEventListener('click', function (e) {
    if (e.target !== languageButton && e.target !== document.querySelector('.menu-social__lang-button span')) {
        languagePopup.classList.remove('active');
    }
});


language.addEventListener('click', function (e) {
    e.preventDefault();

    if (language.classList.contains('ua')) {
        document.querySelector('.menu-social__lang-button span').textContent = 'Uk';
        language.textContent = 'En';
        language.classList.remove('ua');
        language.classList.add('en');
    } else {
        document.querySelector('.menu-social__lang-button span').textContent = 'En';
        language.textContent = 'Uk';
        language.classList.remove('en');
        language.classList.add('ua');
    }
});


const menuBtn = document.querySelector('.burger-menu');
const menu = document.querySelector('.burger__content');
const body = document.querySelector('body');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuBtn.classList.toggle('active');
    body.classList.toggle('active');
});


const anchors = document.querySelectorAll('a[href^="#"]');
//Цикл по всем ссылкам
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        menu.classList.remove('active');
        menuBtn.classList.remove('active');
        body.classList.remove('active');
        e.preventDefault() // Предотвратить стандартное поведение ссылок
        // Атрибут href у ссылки, если его нет то перейти к body (наверх не плавно)
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        // Плавная прокрутка до элемента с id = href у ссылки
        scroll.scrollTo(goto)
    });
}

