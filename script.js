
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