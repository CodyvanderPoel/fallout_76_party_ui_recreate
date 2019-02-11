function heal(bar) {
    var elem = bar;
    var strWidth = elem.style.width.valueOf();
    var numWidth = parseInt(strWidth, 10);
    elem.style.width = numWidth + 5 + "%";
}

function attack(bar) {
    var elem = bar;
    console.log(elem);
    var strWidth = elem.style.width;
    console.log(strWidth)
    var numWidth = parseInt(strWidth, 10);
    console.log(numWidth)
    elem.style.width = numWidth - 5 + "%";
}

var bar1 = document.querySelector(".health #bar1");
var bar2 = document.querySelector(".health #bar2");
var bar3 = document.querySelector(".health #bar3");

var hbtn1 = document.getElementById("heal1");
var hbtn2 = document.getElementById("heal2");
var hbtn3 = document.getElementById("heal3");

var abtn1 = document.getElementById("atk1");
var abtn2 = document.getElementById("atk2");
var abtn3 = document.getElementById("atk3");

hbtn1.addEventListener("click", function() {
    heal(bar1);
});
hbtn2.addEventListener("click", function() {
    heal(bar2);
});
hbtn3.addEventListener("click", function() {
    heal(bar3);
});

abtn1.addEventListener("click", function() {
    attack(bar1);
});
abtn2.addEventListener("click", function() {
    attack(bar2);
});
abtn3.addEventListener("click", function() {
    attack(bar3);
});
