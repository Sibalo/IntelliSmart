$(document).ready(() => {

    $(".solut").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $("#solut").offset().top},
            'fast');
    });
    $(".prods").click(function(event) {
        event.preventDefault();
        $('html,body').animate({
            scrollTop: $("#products").offset().top},
            'fast');
    });
    $("nav a").click(function(event) {
        event.preventDefault();
        switch ($(this).text()){
            case ("About"):
                $('html,body').animate({
                    scrollTop: $("#about").offset().top},
                    'fast');
                break;
            case ("Products & Solutions"):
                $('html,body').animate({
                    scrollTop: $("#products").offset().top},
                    'fast');
                break;
            case ("Contact Us"):
                $('html,body').animate({
                    scrollTop: $("#contact").offset().top},
                    'fast');
                break;
            
            default:
                $('html,body').animate({
                    scrollTop: $("#image").offset().top},
                    'fast');
        }

    });
    
})