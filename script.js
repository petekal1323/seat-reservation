$(document).ready(function() {


   $(".available").on("click", function(){
        $("#form").slideDown();
				$(this).toggleClass("reserved");
    });

    

   var reservation = [];
   var currentSeat;
   $(".available").click(seatClick());

    $(".btn").click(function(){
        var name = $("#name").text();
        $
    });

    function seatClick(){
        var seatNumber;
        $(".available").on("click", function(event){
            if ($(this).hasClass("available") === true) {
            currentSeat = this;
            seatNumber = currentSeat.id;
        }
            
        });

    $("#form").on("submit", function(event){
        event.preventDefault();
        var name = $("#name").val();
        reservation.push(
        {
            name: name,
            number: seatNumber}
        );

        $(".reserved").addClass("submitted").removeClass("available");
        
        function ran(){
            $(".reserved").text("Reserved by ").append("<span><br>"+name+"</span>");
            $(".reserved").addClass("submitted").removeClass("reserved:hover  available:hover column:hover reserved available");
            $(".submitted").off("click");
           
        }

        if ($(".column").hasClass("submitted") === true ) {
            ran();
         
        };

        // function off(){
        //     $(".column").off("click");
        // }
        

    });
}

});