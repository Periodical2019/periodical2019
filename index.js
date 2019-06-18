$(function() {
    $(".button img:last-child").css("display", "none")

    function update() {
        var w = $(window).width()

        if (w > 649) {
            $(".remove").appendTo(".top")
        }
        else {
            $(".remove").prependTo(".bottom")
        }
        if (w > 970) {
            $(".remove2").appendTo(".top")
        }
        else {
            $(".remove2").prependTo(".bottom")
        }
    }
    
    update();
    $(window).resize(function() {
        update();
    });

    $(".dropmenu a").click(function() {
        $(".dropmenu").slideUp()
        $(".button").find("img, h4").toggle()
    });

    $(".button").click(function() {

        $(".button").find("img, h4").toggle()
        $(".dropmenu").slideToggle()
    });
});
