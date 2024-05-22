var bgColIn = document.getElementById("bgColor");
var txtColIn = document.getElementById("txtColor");
var bgColBtn = document.getElementById("bgColBtn")
var txtColBtn = document.getElementById("txtColBtn");
var bodyElmt = document.getElementsByTagName("body");

var bgBtnFunc = function() {
    bodyElmt[0].style.backgroundColor = bgColIn.value;
};
var txtBtnFunc = function() {
    bodyElmt[0].style.color = txtColIn.value;
}

bgColBtn.addEventListener("click", bgBtnFunc);
txtColBtn.addEventListener("click", txtBtnFunc);