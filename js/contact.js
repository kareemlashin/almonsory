$(document).ready(function () {
    /*valid name */
    function validName(name) {
        let nameRegex = /^[A-zا-ي]{2,}$/;
        if (nameRegex.test(name)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid email */

    function validEmail(email) {
        let emailRegex = /^[A-z][A-z0-9]{2,}@(yahoo|gmail).com$/;
        if (emailRegex.test(email)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid pass */

    function validPass(pass) {
        let passRegex = /^[A-z0-9]{8,}$/;
        if (passRegex.test(pass)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid massage */

    function validMassage(massage) {
        let massageRegex = /^[A-z0-9]{20,100}$/;
        if (massageRegex.test(massage)) {
            return true;
        } else {
            return false;
        }
    }
    /*valid phone */

    function validPhone(phone) {
        let PhoneRegex = /^(02)?(010|011|012|015)[0-9]{7}$/;
        if (PhoneRegex.test(phone)) {
            return true;
        } else {
            return false;
        }
    }
    /*phone test */

    $("#inpPhone").keyup(function () {
        let telValue = $("#inpPhone").val();
        if (validPhone(telValue) == true) {
            $("#phoneError").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#phoneError").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })
    /*message test */

    $("#messageInp").keyup(function () {
        let messageValue = $("#messageInp").val();
        if (validMassage(messageValue) == true) {
            $("#errorMassage").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#errorMassage").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })


    /*name test */

    $("#inpName").keyup(function () {
        let nameValue = $("#inpName").val();
        if (validName(nameValue) == true) {
            $("#erorrName").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrName").css("display", "block")
            $("#send").attr("disabled", "true")

        }
    })
    /*email test */

    $("#inpEmail").keyup(function () {
        let emailValue = $("#inpEmail").val();
        if (validEmail(emailValue) == true) {
            $("#erorrEmail").css("display", "none")
            $("#send").removeAttr("disabled")

        }
        else {
            $("#erorrEmail").css("display", "block")
            $("#send").attr("disabled", "true")
        }
    })
    /*massage test */

    $("#messageInp").keyup(function () {
        $("#manyChar").css("display", "block")
        let manyCharMax = $(this).attr("maxlength");
        let manyChar = document.getElementById("messageInp").value;
        let x = manyChar.length;
        $("#manyChar").text(manyCharMax - x)
        if (manyCharMax - x == 0) {
            $("#manyChar").css("color", "#4ac4e6")
        } else {
            $("#manyChar").css("color", "#fff")

        }
    })

    /*button form */
    $("#send").click(function () {
        resetInput();
    })
    /*reset form */
    function resetInput() {
        let inputs = document.getElementsByClassName("inp");
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = "";
        }
    }

})
