$(document).ready(function(){
  $('.partButtons button').mouseenter(function(){
    var targetClass = $(this).attr('data-attr');
    $(targetClass).addClass('visible');
  }).mouseleave(function(){
    var targetClass = $(this).attr('data-attr');
    $(targetClass).removeClass('visible');
  });

  if(screen.width >= 992){
    $('.lowerColumn > nav > ul > li').mouseenter(function(){
      $(this).find('.submenu').fadeIn('');
    }).mouseleave(function(){
      $(this).find('.submenu').fadeOut('');
    });
  }else{
    $('.hamburger').click(function(){
      $('.lowerColumn > nav').addClass('active');
    });
    $('.closeButton').click(function(){
      $('.lowerColumn > nav').removeClass('active');
    });
  }

  $('.carSelection__carList li').click(function(){
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

  $('.yourCar span').click(function(){
    $('.carSelection').fadeToggle('300');
  });
  $('.selectCar').click(function(){
    $('.carSelection').fadeOut('300');
  });
});
