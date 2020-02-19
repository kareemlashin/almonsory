$(document).ready(function () {

    let heightHeadTitle = $(".head-title").height();
    let heightNav = $(".navbar").height();
    let totalNav = heightHeadTitle + heightNav;
    let heightWindow = $(window).height();
    let navPlace = $(".navbar").offset().top;

    $("header").css({ marginTop: heightNav })

    $(window).scroll(function () {
        let windowScroll = $(window).scrollTop();
        if (windowScroll > navPlace) {
            $(".navbar").addClass("fixed-top");

        } else {
            $(".navbar").removeClass("fixed-top");

        }
    })
})
