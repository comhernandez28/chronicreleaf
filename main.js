$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(100);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
});

// Offset for Main Navigation
$('#mainNav').affix({
    offset: {
        top: 100
    }
})
