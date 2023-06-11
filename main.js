


function formValidate() {

let yourEmail= document.getElementById("email").value;
let yourpass= document.getElementById("pass").value;
let yourPhone= document.getElementById("phone").value;

let error =document.getElementById("data");
let text ="";

if(yourEmail.length < 10 || yourEmail.indexOf ("@") == -1){
    text="please enter avalid email"
    error.innerHTML = text;
    return false;

}
else if (yourpass.length < 8 ) {

    text="please enter avalid password"
    error.innerHTML=text;
    return false;

}
else if ( isNaN(yourPhone) || yourPhone.length != 11 ){
    text="please enter avalid phone number"
    error.innerHTML=text;
    return false;

}
else {
    alert("done");
    return true ;
}

}