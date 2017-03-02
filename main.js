// Offset for Main Navigation
$('#custom-bootstrap-menu').affix({
    offset: {
        top: 100
    }
})

//GOOGLE MAP

function initMap() {
  var chroniclb = {lat: 33.785501, lng: -118.215815};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 12,
    center: chroniclb
  });
  var marker = new google.maps.Marker({
    position: chroniclb,
    map: map
  });
}

options = $.extend({
  scrollwheel: false,
  navigationControl: false,
  mapTypeControl: false,
  scaleControl: false,
  draggable: false,
  mapTypeId: google.maps.MapTypeId.ROADMAP
}, options);

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
