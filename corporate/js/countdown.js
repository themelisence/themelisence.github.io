$(function(){

    _countdown();
   
    function _countdown(){

        var countDownDate = new Date("Jan 1, 2019 00:00:00").getTime();

        var x = setInterval(function() {

            var now = new Date().getTime(),
                distance = countDownDate - now,
                days = Math.floor(distance / (1000 * 60 * 60 * 24)),
                hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
                seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("_countdown").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
           
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("_countdown").innerHTML = "EXPIRED";
            }
        }, 1000);

   }

});