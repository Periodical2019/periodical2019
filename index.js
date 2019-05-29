$(function() {


    $("#dropdown").css("display", "none")



    $("#button").click(function() {
        $("#dropdown").slideToggle()
        $(this).find("img").toggle(100)
        $("#logo").find("img").toggle()
    });





});
