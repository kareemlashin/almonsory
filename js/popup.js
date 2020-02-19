$(document).ready(function () {


    let itemsImg = Array.from(document.getElementsByClassName("img-show"));
    let bigBox = document.getElementById("box-show");
    let indexCurrent = 0;
    for (let i = 0; i < itemsImg.length; i++) {
        itemsImg[i].addEventListener("click", function (e) {
            bigBox.style.display = "flex";
            let imgSrc = e.target.src;
            indexCurrent = itemsImg.indexOf(e.target);
            bigBox.firstElementChild.style.backgroundImage = "url(" + imgSrc + ")";
        })
    }

    $("#prev").click(function () {
        prevItem();
    })
    $("#next").click(function () {
        nextItem();
    })
    function nextItem() {
        indexCurrent++;

        if (indexCurrent == itemsImg.length) {
            indexCurrent = 0;
            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";
        } else {

            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";

        }
    }
    function prevItem() {
        indexCurrent--;

        if (indexCurrent < 0) {

            indexCurrent = itemsImg.length - 1;
            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";
        } else {
            bigBox.firstElementChild.style.backgroundImage = "url(" + itemsImg[indexCurrent].src + ")";

        }

    }
    document.addEventListener("keyup", function (e) {
        if (e.keyCode == 39) {
            nextItem();
        } else if (e.keyCode == 37) {
            prevItem();
        } else if (e.keyCode == 27) {
            closeItem();
        }

    })

    $("#close").click(function () {
        closeItem();
    })
    function closeItem() {
        $("#box-show").slideUp(1000)
    }
})