$(document).ready(function(){
    
    $('.scrollTo').click( function() { // Au clic sur un élément
        var page = $(this).attr('href'); // Page cible
        var speed = 750; // Durée de l'animation (en ms)
        $('html, body').animate( { scrollTop: $(page).offset().top }, speed ); // Go
        return false;
    });



    // Nice scroll
    $("html").niceScroll();


    $('#net').hide();
    $('#responsive').hide();

    $('#allImages').show();

    $('#all').click(function(e){
        e.preventDefault();
        $('#net').fadeOut();
        $('#responsive').fadeOut();
        $('#allImages').fadeIn();

        $('#networking').parent().removeClass('active');
        $('#responsiveDesign').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });

    $('#networking').click(function(e){
        e.preventDefault();
        $('#responsive').fadeOut();
        $('#allImages').fadeOut();
        $('#net').fadeIn();

        $(this).parent().addClass('active');
        $('#responsiveDesign').parent().removeClass('active');
        $('#all').parent().removeClass('active');
        return false;
    });


    $('#responsiveDesign').click(function(e){
        e.preventDefault();
        $('#net').fadeOut();
        $('#allImages').fadeOut();
        $('#responsive').fadeIn();

        $('#networking').parent().removeClass('active');
        $('#all').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });

    $('#up').hide();

    // $(window).scroll(function() {
    //     $('#up').fadeIn(6000);
    // });
    
    //$('.section').height($(window).height());


        // Hide Header on on scroll down
    var didScroll;
    var lastScrollTop = 0;
    var delta = 5;
    var navbarHeight = $(window).outerHeight();

    $(window).scroll(function(event){
        didScroll = true;
    });

    setInterval(function() {
        if (didScroll) {
            hasScrolled();
            didScroll = false;
        }
    }, 250);

    function hasScrolled() {
        var st = $(this).scrollTop();
        
        // Make sure they scroll more than delta
        if(Math.abs(lastScrollTop - st) <= delta)
            return;
        
        // If they scrolled down and are past the navbar, add class .nav-up.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight){
            // Scroll Down
            $('#up').fadeIn(3000);
        } else {
            // Scroll Up
            if(st + $(window).height() < $(document).height()) {
                $('#up').fadeOut(3000);
                $('#up').css({visibility: 1, opacity: 1});
            }
        }
        
        lastScrollTop = st;
    }

    $('#up').click(function(){ $(window).height = $(document).height; })

});

