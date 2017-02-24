$(document).ready(function() {


   $(".available").on("click", function(){
        $("#form").show();
				$(this).toggleClass("reserved")

});


/*
 This stuff toggles adding text mouseenter/leave
    $(".available").mouseenter(function() {



						$(this).append("<p><br />Seat <br />Available</p>");
			});

    $(".available").mouseleave(function() {

            $(this).find("p:last").remove();

    });
		*/
});
