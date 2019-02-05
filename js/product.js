$(document).ready(function(){
  var swiper = new Swiper('.overview-swiper-container', {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      type : 'custom',
      bulletClass:'swiper_pagination_img'
    },
  });

  $('.swiper_pagination_img').click(function(){
    $(this).addClass('active');
    $(this).siblings().removeClass('active');
  });
  $('.priceButtons__button').click(function(){
    $(this).toggleClass('active');
  });
  $('.configBody__mod a').click(function(){
    $(this).addClass('active');
    $(this).parent().siblings().find('a').removeClass('active');
  })
});
