function validateUserName() {
    // regEx: to find "E00" in the input string irrespective of its location n the string
    // var regex = /E00/i;   // i is for case-insensitive | g - global
    var regex = /[a-g A-G]00[h-p H-P]/;
    var userName = document.getElementById("userName");
    var lblInvalidUserName = document.getElementById("lblInvalidUserName");
    
    if( regex.test( userName.value ) ) {
        lblInvalidUserName.textContent = "Valid Username!"
        lblInvalidUserName.style.visibility="visible";
        lblInvalidUserName.style.color = "green" 
        userName.style.border = "solid 3px green";
    }
    else {
        lblInvalidUserName.textContent = "Invalid Username!"
        lblInvalidUserName.style.color = "red" 
        lblInvalidUserName.style.visibility="visible";
        userName.style.border = "solid 3px red";
    }
}