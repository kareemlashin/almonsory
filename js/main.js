$(document).ready(function () {
    AOS.init();

    $(".upPage").click(function () {
        $("body ,html").animate({ scrollTop: 0 }, 1000)
    })

    let heightHeadTitle = $(".head-title").height();
    let heightNav = $(".navbar").height();
    let totalNav = heightHeadTitle + heightNav;
    let heightWindow = $(window).height();
    let navPlace = $(".navbar").offset().top;
    $(".carousel , .carousel-inner , .carousel-item").height(heightWindow - totalNav)

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > navPlace) {
            $(".navbar").addClass("fixed-top");

        } else {
            $(".navbar").removeClass("fixed-top");

        }
    })
})

/*$(document).ready(function () {
    $("#loading").fadeOut(3000, function () {
        $("body").css({ overflow: "auto" })



        $("#list li a").click(function () {
            let dataChose = $(this).attr("data-filter");
            if (dataChose == "all") {
                $(".filter").show(1000);
            } else {
                $('.filter').not("." + dataChose).hide(1000);
                $('.filter').filter("." + dataChose).show(1000);
            }
        })
        $("#list li a").click(function () {
            $(this).addClass("activeX");
            $("#list li a").not(this).removeClass('activeX');

        })

})
*/