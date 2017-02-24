$(document).ready(function() {


   $(".available").on("click", function(){
        $("#form").show();
				$(this).toggleClass("reserved")

});


/*
    $(".available").mouseenter(function() {


						$(this).append("<p><br />Seat <br />Available</p>");
			});

    $(".available").mouseleave(function() {

            $(this).find("p:last").remove();

    });
    */
});