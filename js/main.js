
$(window).on('scroll', function(){
    if($(this).scrollTop() >20){
        $('.header-area').addClass('sticky');
    }else{
        $('.header-area').removeClass('sticky');
    }
});
function closeNav(){
    document.getElementById("slickNav").style.display="none";
}
$(document).ready(function(){
    var typed = new Typed('.element', {
        strings: [' Web Designer','Web Developer'],
        typeSpeed: 50,
        backSpeed: 50,
        loop: true,
        backDelay: 1000,
        startDelay: 1000,
        fadeOut: true,
        smartBackspace: true
    });
//One page Nav
   
        $('#nav').onePageNav();
        $('#slickNav').onePageNav();

        $(".navbar-toggler").click(function(){
            $(".slick-nav").toggle(300);
          }); 

  });


var mixer = mixitup('.mixer');
var mixer = mixitup(containerEl);
var mixer = mixitup(containerEl, {
    animation: {
        duration: 800
    }
});

