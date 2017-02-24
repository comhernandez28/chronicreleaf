// Offset for Main Navigation
$('#custom-bootstrap-menu').affix({
    offset: {
        top: 100
    }
})

$(function(){
  $(window).scroll(function(){
    var aTop = $('nav').height();
    if($(this).scrollTop()>=aTop){
        $('.navbar-toggle').addClass("navbar-scrolld");
        $('.brand-logo').addClass("brand-logo-scrolld");
    }
  });
});

$(function(){
  $(window).scroll(function(){
    var aTop = $('nav').height();
    if($(this).scrollTop()<=aTop){
        $('.navbar-toggle').removeClass("navbar-scrolld");
        $('.brand-logo').removeClass("brand-logo-scrolld");
    }
  });
});
