$(document).ready(function () {
    /*
    taps
    */
    $(".myServise").click(function () {
        /*get id  */
        let myId = $(this).attr("id");
        /*hide all  */
        $(".description").hide(1000);
        /*show  id +-description */
        $("#" + myId + "-description").slideDown(1000);

    })

})