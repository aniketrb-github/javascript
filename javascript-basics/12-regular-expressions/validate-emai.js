function validateEmail() {

    /*
    
    \. this ignores & escapes the true value of . & simply treats it as a .
    +  for one or more than one character or we either enter a range like {4, 25} i..e mini 4 and max 25 characters allowed
    ? marks (.[a-z]{2,8}) division as optional which we have used specifically for .in / .uk etc

    ex: Ron-1991-Paul@Way2Sms.co.in
    This is divided into 4 divisions with all possible combos as follows:
    (Any-1991-N.a.m.e)@(Way2Sms).(com)(.in)
    @ and . are mandatory so they are outside the round brackets
    */
    var regex = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+).([a-z]{2,8})(.[a-z]{2,8})?$/;



    var emailId = document.getElementById("emailId");
    var lblInvalidEmail = document.getElementById("lblInvalidEmail");
    
    if( regex.test( emailId.value ) ) {
        lblInvalidEmail.innerHTML = "Valid Email ID!"
        lblInvalidEmail.style.visibility="visible";
        lblInvalidEmail.style.color = "green" 
        emailId.style.border = "solid 3px green";
    } else {
        lblInvalidEmail.textContent = "Invalid Email ID!"
        lblInvalidEmail.style.color = "red" 
        lblInvalidEmail.style.visibility="visible";
        emailId.style.border = "solid 3px red";
    }
}