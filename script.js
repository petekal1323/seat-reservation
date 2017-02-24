$(document).ready(function(){

	$(".seat").on("click", function(){
		$("#form").show(); //This function makes our
							//form showup. hashtag blessed
	});

	$(".available").mouseenter (function(){
		$(this).append("<span><br>seat available</span>");

	});
	$(".available").mouseleave (function(){
		$(this).find("span:last").remove();
 /* New Comment*/

});
	});
