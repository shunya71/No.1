'use strict' ;

$(function() {

  $('.q_list').click(function() {
    var $answer = $(this).find('.answer');
    if ($answer.hasClass('open')) {
      $answer.removeClass('open');
      $answer.slideUp();

      $(this).find('.q_item').text('+');
    } else {
      $answer.addClass('open');
      $answer.slideDown();

      $(this).find('.q_item').text('-');
    }
  });

  $(function() {
    $('#pagetop').hide();
    $(window).scroll(function() {
      if ($(window).scrollTop() > 0) {
        $('#pagetop').slideDown(600);
      } else {
        $('#pagetop').slideUp(600);
      }
    });
  });
});