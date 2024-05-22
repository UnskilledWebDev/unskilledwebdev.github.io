var bgColIn = document.getElementById("bgColor");
var txtColIn = document.getElementById("txtColor");
var bgColBtn = document.getElementById("bgColBtn")
var txtColBtn = document.getElementById("txtColBtn");

var bgBtnFunc = function() {
    console.log(bgColIn.value);
};
var txtBtnFunc = function() {
    console.log(txtColIn.value);
}

bgColBtn.addEventListener("click", bgBtnFunc);
txtColBtn.addEventListener("click", txtBtnFunc);