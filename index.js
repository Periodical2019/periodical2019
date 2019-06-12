$(function() {
      $(".button img:last-child").css("display", "none")
    
    
    
    
    
    
    
    var w = $(window).width()

    if (w > 649) {
        console.log(w)

        $(".remove").appendTo(".top")
    }
    else {
        console.log(w)
        $(".remove").prependTo(".bottom")
    }

    if (w > 970) {
        $(".remove2").appendTo(".top")
    }
    else {
        $(".remove2").prependTo(".bottom")
    }



    $(window).resize(function() {

        w = $(window).width()

        if (w > 649) {
            console.log(w)

            $(".remove").appendTo(".top")
        }
        else {
            console.log(w)
            $(".remove").prependTo(".bottom")
        }

        if (w > 970) {
            $(".remove2").appendTo(".top")
        }
        else {
            $(".remove2").prependTo(".bottom")
        }

    });






  
    

    $(".button").click(function() {

        $(".button").find("img, h4").toggle()
        $(".dropmenu").slideToggle()


    })

});
