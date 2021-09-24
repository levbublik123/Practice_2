function ibg() {

  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
      if (ibg[i].querySelector('img')) {
          ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
      }
  }
}

function ibg() {

  $.each($('.ibg'), function(index, val) {
      if ($(this).find('img').length > 0) {
          $(this).css('background-image', 'url("' + $(this).find('img').attr('src') + '")');
      }
  });
}

ibg();

$(document).ready(function() {
  $('.header__burger').click(function(event) {
      $('.header__burger,.header__menu').toggleClass('active');
  })
})

document.querySelector('.rectange__img').onmouseover = function() {
  let text = document.querySelector('.title-img');
  text.style.visibility = 'visible';
  if (document.querySelector('.rectange__img').onmouseout = function() {
          text.style.visibility = 'hidden';
      }) {

  }
}

 


$('.link').on('click', function(e) {
    e.preventDefault();
    $('.link').removeClass('active');
    $(this).addClass('active');
  })

  $(".arrow-7").on("click", function(e){
    e.preventDefault();
    let anchor = $('.information__item');
    $('html, body').stop().animate({
        scrollTop: $(anchor).offset().top - 60
    }, 800);
});

$('.tab').on('click', function(e) {
    e.preventDefault();
    $('.tab').removeClass('active');
    $(this).addClass('active');
  })

$('.slider__team').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
});
$('.slider__icons-fade').slick({
  dots: true,
  infinite: true,
  speed: 500,
  fade: true,
  arrows: true,
  cssEase: 'linear'
});
$('.slider-vert').slick({
    vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        dots: true,
        arrows: false,
        autoplay: true,
});
$(".t506__title:eq(0)").addClass("numberup");
$(".t506__title:eq(1)").addClass("numberup1");
$(".t506__title:eq(2)").addClass("numberup2");
$(".t506__title:eq(2)").addClass("numberup3");
$(function() {
  let target_block = $(".numberup");
  let blockStatus = true;
  $(window).scroll(function() {
      let scrollEvent = ($(window).scrollTop() > ($(target_block).offset().top - $(window).height()));
      if (scrollEvent && blockStatus) {
          blockStatus = false;



          $({
              numberValue: 0
          }).animate({
              numberValue: 80
          }, {
              duration: 2500,
              easing: "swing",
              step: function(val) {
                  $(".numberup").html(Math.ceil(val));
              }
          });
          $({
              numberValue: 0
          }).animate({
              numberValue: 75
          }, {
              duration: 2500,
              easing: "swing",
              step: function(val) {
                  $(".numberup1").html(Math.ceil(val));
              }
          });
          $({
              numberValue: 0
          }).animate({
              numberValue: 60
          }, {
              duration: 2500,
              easing: "swing",
              step: function(val) {
                  $(".numberup2").html(Math.ceil(val));
              }
          });
      }
  });
});



$(window).scroll(function() {

})


$(".t506__title:eq(0)").addClass("progressnum");
$(".t506__title:eq(1)").addClass("progressnum1");
$(".t506__title:eq(2)").addClass("progressnum2");
$(function() {
  let target_block = $(".numberup");
  let blockStatus = true;
  $(window).scroll(function() {
      let scrollEvent = ($(window).scrollTop() > ($(target_block).offset().top - $(window).height()));
      if (scrollEvent && blockStatus) {
          blockStatus = false;
          $(function() {
              let target_block = $(".progressnumst");
              let blockStatus = true;
              $(window).scroll(function() {
                  let scrollEvent = ($(window).scrollTop() > ($(target_block).offset().top - $(window).height()));
                  if (scrollEvent && blockStatus) {
                      blockStatus = false;
                      let innerBar = document.querySelectorAll('.innerBar');
                      innerBar.forEach(function(innerBar) {
                          let width = 1;
                          let id = setInterval(TimeFrame, 15);

                          function TimeFrame() {
                              if (width >= 80) {
                                  clearInterval(id);
                              } else {
                                  width++;
                                  innerBar.classList.add('innerBarProg');
                                  innerBar.style.width = width + '%';
                              }
                          }
                      });
                      let innerBarMid = document.querySelectorAll('.innerBarMid');
                      innerBarMid.forEach(function(innerBarMid) {
                          let width = 1;
                          let id = setInterval(TimeFrame, 15);
                          let prog = document.querySelectorAll('.innerBarMid');

                          function TimeFrame() {
                              if (width >= 75) {
                                  clearInterval(id);
                              } else {
                                  width++;

                                  innerBarMid.style.width = width + '%';
                                  innerBarMid.classList.add('innerBarProg');
                              }
                          }
                      });

                      let innerBarBig = document.querySelectorAll('.innerBarBig');
                      innerBarBig.forEach(function(innerBarBig) {
                          let width = 1;
                          let id = setInterval(TimeFrame, 15);
                          let prog = document.querySelectorAll('.innerBarBig');

                          function TimeFrame() {
                              if (width >= 60) {
                                  clearInterval(id);
                              } else {
                                  width++;

                                  innerBarBig.style.width = width + '%';
                                  innerBarBig.classList.add('innerBarProg')
                              }
                          }
                      });
                      $({
                          numberValue: 0
                      }).animate({
                          numberValue: 80
                      }, {
                          duration: 3000,
                          easing: "swing",
                          step: function(val) {
                              $(".progressnum").html(Math.ceil(val));
                          }
                      });
                      $({
                          numberValue: 0
                      }).animate({
                          numberValue: 75
                      }, {
                          duration: 3000,
                          easing: "swing",
                          step: function(val) {
                              $(".progressnum1").html(Math.ceil(val));
                          }
                      });
                      $({
                          numberValue: 0
                      }).animate({
                          numberValue: 60
                      }, {
                          duration: 3000,
                          easing: "swing",
                          step: function(val) {
                              $(".progressnum2").html(Math.ceil(val));
                          }
                      });
                  }
              })
          })

      }
  })
})