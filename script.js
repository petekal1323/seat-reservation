$(document).ready(function() {


   $(".available").on("click", function(){
        $("#form").show();
				$(this).toggleClass("reserved");
            });

    

   var reservation = [];
   var currentSeat;

    $(".btn").click(function(){
        var name = $("#name").text();
        $
    });

    function seatClick(){
        var seatNumber;
        $(".column").on("click", function(event){
            currentSeat = this;
            seatNumber = currentSeat.id;
        });

    $("#form").on("submit", function(event){
        event.preventDefault();
        var name = $("#name").val();
        reservation.push(
        {
            name: name,
            number: seatNumber}
            );
    });
    


    }




});