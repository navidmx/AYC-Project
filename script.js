var name = "Anonymous";
var value = 50;

function signIn(){
    name = document.getElementById("nameInput").value;
    if (name != ""){
        value = document.getElementById("rangeInput").value;
        document.getElementById("signIn").style.display = "none";
        console.log(name+" "+value);
    }
    else {
        name = "Anonymous";
        value = document.getElementById("rangeInput").value;
        document.getElementById("signIn").style.display = "none";
        console.log(name+" "+value);
    }
}