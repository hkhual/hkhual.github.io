
function myPopUp(){
    let pop = document.getElementsByTagName('button').innerHTML;
    pop += alert("You clicked me");

}



function changeFont(){
    document.getElementById("about").innerHTML = "Paragraph changed.";
}

var close = document.querySelector('#close');
close.onclick = function(){
    this.parentNode.style.display = 'none';   
};


function myTime(){
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

}

function StringVariable(){
    var username;
    var message;
    username = 'Molly';
    message = 'See our upcoming range';

    var elName = docuemnt.getElementById('name');
    elName.textContent = username;

    var elNote = document.getElementById('note');
    elNote.textContent = message;
}



