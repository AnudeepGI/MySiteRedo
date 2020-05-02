var option1 = document.getElementsByClassName("option1");
var option2 = document.getElementsByClassName("option2");
var option3 = document.getElementsByClassName("option3");

option1[0].onclick = function() {
    console.log("option1");
    
    document.getElementsByClassName('leftSide')[0].className += ' removedLeft'
    document.getElementsByClassName('rightSide')[0].className += ' removedRight'


    return false;
};

option2[0].onclick = function() {
    console.log("option2");
    return false;
};

option3[0].onclick = function() {
    console.log("option3");
    return false;
};