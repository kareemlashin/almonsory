$(document).ready(function () {
    /*
    list
    chose
    */
    $("#list li a").click(function () {
        /*get attr data-filter */
        let dataChose = $(this).attr("data-filter");
        /*get all */
        if (dataChose == "all") {
            $(".filter").show(1000);
        } else {
            /*get attr class chose */

            $('.filter').not("." + dataChose).hide(1000);
            $('.filter').filter("." + dataChose).show(1000);
        }
    })
    /*toggle class*/

    $("#list li a").click(function () {
        $(this).addClass("activeX");
        $("#list li a").not(this).removeClass('activeX');

    })

})