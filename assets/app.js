$(document).ready(function () {
    var popup = $('.js-popup');
    var popupButton = $('.js-toggle');
    var menuToggle = $('.js-menu-toggle');
    var accTrigger = $('.js-accordion');
    var accContent = $('.accordion-info');
  
    popupButton.click(function () {
      popup.toggleClass('open');
    });
  
    menuToggle.click(function () {
      $('html').toggleClass('menu-is-open');
    });
  
    accTrigger.click(function () {
      // Opción 1
      // $(this).siblings().slideToggle();
  
      // Opción 2
      if ($(this).siblings().is(':visible')) {
        $(this).siblings().slideUp();
      } else {
        accContent.slideUp();
        $(this).siblings().slideDown();
      }
    });
  
    // Configuración de Librerías
  
    AOS.init();
  
    $('.slider').slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });
  
  $(window).resize(function () {
    $('html').removeClass('menu-is-open');
  });
  