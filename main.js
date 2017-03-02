// Offset for Main Navigation
$('#custom-bootstrap-menu').affix({
    offset: {
        top: 100
    }
})

//MAP

function initMap() {
        var uluru = {lat: -25.363, lng: 131.044};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 4,
          center: long beach
        });
        var marker = new google.maps.Marker({
          position: long beach,
          map: map
        });
      }

//SHRINK NAVBAR

$(function(){
  $(window).scroll(function(){
    var aTop = $('nav').height();
    if($(this).scrollTop()>=aTop){
        $('.navbar-toggle').addClass("navbar-scrolld");
        $('.brand-logo').addClass("brand-logo-scrolld");
    }
  });
});

//ENLARGE NAVBAR

$(function(){
  $(window).scroll(function(){
    var aTop = $('nav').height();
    if($(this).scrollTop()<=aTop){
        $('.navbar-toggle').removeClass("navbar-scrolld");
        $('.brand-logo').removeClass("brand-logo-scrolld");
    }
  });
});
