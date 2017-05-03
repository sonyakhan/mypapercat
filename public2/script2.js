$('#mainNav').affix({
  offset: {
    top: 100
  }
});

$(document).on('click','.navbar-collapse.in',function(e) {
    if( $(e.target).is('a') && $(e.target).attr('class') != 'dropdown-toggle' ) {
        $(this).collapse('hide');
    }
});

if($(window).width() >= 1024){
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $('.navbar-brand>img').addClass('navbar-logo');
      $('.menu').removeClass('enlargen');
    } else {
      $('.navbar-brand>img').removeClass('navbar-logo');
      $('.menu').addClass('enlargen');
    }
  });
}
