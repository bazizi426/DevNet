$(function(){
    // Nice scroll
        $("html").niceScroll();

        //$('.section').height($(window).height());

    // Use Smooth scroll
    // smoothScroll.init({
    //      speed : 500,
    //      updateUrl : false
    // });

    $('#flat').hide();
    $('#responsive').hide();

    $('#allImages').show();

    $('#all').click(function(e){
        e.preventDefault();
        $('#flat').fadeOut();
        $('#responsive').fadeOut();
        $('#allImages').fadeIn();

        $('#flatDesign').parent().removeClass('active');
        $('#responsiveDesign').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });

    $('#flatDesign').click(function(e){
        e.preventDefault();
        $('#responsive').fadeOut();
        $('#allImages').fadeOut();
        $('#flat').fadeIn();

        $(this).parent().addClass('active');
        $('#responsiveDesign').parent().removeClass('active');
        $('#all').parent().removeClass('active');
        return false;
    });


    $('#responsiveDesign').click(function(e){
        e.preventDefault();
        $('#flat').fadeOut();
        $('#allImages').fadeOut();
        $('#responsive').fadeIn();

        $('#flatDesign').parent().removeClass('active');
        $('#all').parent().removeClass('active');
        $(this).parent().addClass('active');
        return false;
    });



});

