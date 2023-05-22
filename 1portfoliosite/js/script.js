$(window).on("load", function() {
    $(".loader .inner").fadeOut(500, function() {
        $(".loader").fadeOut(750);
    });
});


$(document).ready(function() {


    $("[data-fancybox]").fancybox();

    $(".items").isotope({
        filter: '*',
        animationOptions: {
            duration: 1000,
            easing: 'linear',
            queue: false
        }
    });

    //filter function
    $("#filters a").click(function() {

        $("#filters .current").removeClass("current");
        $(this).addClass("current");

        var selector = $(this).attr("data-filter");

        $(".items").isotope({
            filter: selector,
            animationOptions: {
                duration: 1000,
                easing: 'linear',
                queue: false
            }
        });

        return false;
    });


        //scroll animation when using navbar
    $("navigation li a").click(function(e) {
        e.preventDefault();

        var targetElement = $(this).attr("href");
        var targetPosition = $(targetElement).offset().top;
        $("html, body").animate({scrollTop: targetPosition - 50}, "slow");

    });



    //keeps navbar stuck to top when scrolling
        const nav = $("#navigation");
        const navTop = nav.offset().top;

        $(window).on("scroll", stickyNavigation);

        function stickyNavigation() {

            var body = $("body");

            if($(window).scrollTop() >= navTop) {
                body.css("padding-top", nav.outerHeight()+ "px");
                body.addClass("fixedNav");
            }
            else {
                body.css("padding-top", 0);
                body.removeClass("fixedNav");
            }
        }
});