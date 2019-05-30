$(function() {


    $("#dropdown").css("display", "none")


    var w = $(window).width()

    if (w > 901) {
        console.log(w)

        $(".remove").prependTo(".bottom")
    }
    else {
        console.log(w)
        $(".remove").appendTo(".top")
    }



    $(window).resize(function() {

        w = $(window).width()

        if (w > 901) {
            console.log(w)

            $(".remove").prependTo(".bottom")
        }
        else {
            console.log(w)
            $(".remove").appendTo(".top")
        }

    });






    $("#button").click(function() {
        $("#dropdown").slideToggle()

        // $("body").toggle(function() {$("body").css("overflow","hidden")}, function() {$("body").css("overflow","auto")})
        $(this).find("img").toggle(100)
        $("#logo").find("img").toggle()
        $("#navbar h6").css("color", "white")





    })







})
