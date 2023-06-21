var bDay = document.getElementById('bDay');
var bMonth = document.getElementById('bMonth');
var bYear = document.getElementById('bYear');
var ngaySinh = document.getElementById('ngaySinh');

function troLai() {
    switch (whereIs) {
        case 1: break;
        case 2:
            $("#next-block-1").show();
            $("#next-block-2").hide();
            whereIs = 1;
            break;
        case 3:
            $("#next-block-2").show();
            $("#next-block-3").hide();
            whereIs = 2;
            break;
        default: break;
    }
}

function khamPha() {
    if (ngaySinh.value != "") {
        bDay.value = ngaySinh.value.split("-")[2];
        bMonth.value = ngaySinh.value.split("-")[1];
        bYear.value = ngaySinh.value.split("-")[0];
        $("#next-block-1").hide();
        $("#next-block-2").show();
        whereIs = 2;
    }
    else {
        alert("Điền vào ngày sinh!");
    }
}

function xemKetQua() {
    var zodiac = findZodiac(parseInt(bDay.value), bMonth.value);
    $("#ketQua > div").removeClass("d-flex");
    $("#ketQua > div").addClass("d-none");
    $("#" + zodiac).removeClass("d-none");
    $("#" + zodiac).addClass("d-flex");
    $("#next-block-2").hide();
    $("#next-block-3").show();
    whereIs = 3;
}

function chiaSe() {
    window.location.href = '/?result=1';
}

function findZodiac(day, bMonth) {
    var zodiac = "";
    switch (bMonth) {
        case "01":
            if (day < 20)
                zodiac = "capricorn";
            else
                zodiac = "aquarius";
            break;
        case "02":
            if (day < 19)
                zodiac = "aquarius";
            else
                zodiac = "pisces";
            break;
        case "03":
            if (day < 21)
                zodiac = "pisces";
            else
                zodiac = "aries";
            break;
        case "04":
            if (day < 20)
                zodiac = "aries";
            else
                zodiac = "taurus";
            break;
        case "05":
            if (day < 21)
                zodiac = "taurus";
            else
                zodiac = "gemini";
            break;
        case "06":
            if (day < 21)
                zodiac = "gemini";
            else
                zodiac = "cancer";
            break;
        case "07":
            if (day < 23)
                zodiac = "cancer";
            else
                zodiac = "leo";
            break;
        case "08":
            if (day < 23)
                zodiac = "leo";
            else
                zodiac = "virgo";
            break;
        case "09":
            if (day < 23)
                zodiac = "virgo";
            else
                zodiac = "libra";
            break;
        case "10":
            if (day < 23)
                zodiac = "libra";
            else
                zodiac = "scorpio";
            break;
        case "11":
            if (day < 22)
                zodiac = "scorpio";
            else
                zodiac = "sagittarius";
            break;
        case "12":
            if (day < 22)
                zodiac = "sagittarius";
            else
                zodiac = "capricorn"
            break;
    }
    return zodiac;
}