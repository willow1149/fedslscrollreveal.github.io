$(window).scroll(function(){
    var winscroll = $(this).scrollTop();
    var winheight = $(window).height();

    $('.front-head').css({
		'transform' : 'translate(0px, -'+ winscroll /4 +'%)'
	});
});

// Changing the defaults
window.sr = ScrollReveal({ reset: true });

// Customizing a reveal set
sr.reveal('.para', {
    duration: 200
});
sr.reveal('.foo', {
  duration: 2000,
  origin: 'top',
  opacity: 1,
});
sr.reveal('.bar', { duration: 1000 });
