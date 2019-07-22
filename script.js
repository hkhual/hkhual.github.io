
function myFunction(a, b){
    return a + b;
}

console.log(myFunction(35,34));


function changeFont(){
    document.getElementById("about").innerHTML = "Paragraph changed.";
}

var close = document.querySelector('#close');
close.onclick = function(){
    this.parentNode.style.display = 'none';

    
}

var today = new Date();
var hourNow = today.getHours();
var greeting;

if(hourNow > 18){
    greeting = 'Good evening';
}else if(hourNow > 12){
    greeting = 'Good Afternoon';
} else if(hourNow > 0){
    greeting = 'Good Morning';
} else{
    greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');