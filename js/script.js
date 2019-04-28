$('.nav__button').on('click', function () {
    $('.nav__icon').toggleClass('show');
    $('.nav__list').slideToggle();
})

$(document).on('scroll', function () {
    if ($(document).scrollTop() > 100) {
        $('.nav__top, .nav__wrapper, .nav__link, .nav__button').addClass('scrolled');
    } else $('.nav__top, .nav__wrapper, .nav__link, .nav__button').removeClass('scrolled');
})



const aboutOffset = $('#about').offset().top;
const blogOffset = $('#blog').offset().top;
const portfolioOffset = $('#portfolio').offset().top;
const contactOffset = $('#contact').offset().top;

$(window).on('scroll', function () {
    if ($(window).scrollTop() < aboutOffset - 10) {
        $('.nav__link').not('.js__home').removeClass('now');
        $('.js__home').addClass('now');
    } else if ($(window).scrollTop() < blogOffset - 10) {
        $('.nav__link').not('.js__about').removeClass('now');
        $('.js__about').addClass('now');
    } else if ($(window).scrollTop() < portfolioOffset) {
        $('.nav__link').not('.js__blog').removeClass('now');
        $('.js__blog').addClass('now');
    } else if ($(window).scrollTop() < contactOffset) {
        $('.nav__link').not('.js__portfolio').removeClass('now');
        $('.js__portfolio').addClass('now');
    } else if ($(window).scrollTop() > contactOffset) {
        $('.nav__link').not('.js__contact').removeClass('now');
        $('.js__contact').addClass('now');
    }
})