function validateContactNumber() {

    /* 
    ^ denotes the start of the regex while $ denote the end of the regex 
    \d : match any digit (from 0 to 9 | similar to writting [0-9])
    \w : match any character (from 'a' to 'z', 'A' to 'Z', 0 to 9, & _ )
    \s : match whitespace character (space & tab)
    \t : match a tab whitespace only
    */

    /*
      [7-9] : First digit needs to be between 7 to 9
      /d{9} : match any digit between 0-9 for 9 positions/places subsequently
     */
    var regExMobile = /^[7-9]\d{9}$/;
    var mobileNo = document.getElementById("mobileNumber");
    

    if( regExMobile.test( mobileNo.value ) ) {
        lblInvalidContactNum.innerHTML = "Valid Mobile Numnber!"
        lblInvalidContactNum.style.visibility="visible";
        lblInvalidContactNum.style.color = "green" 
        mobileNo.style.border = "solid 3px green";
    } else {
        lblInvalidContactNum.innerHTML = "Invalid Mobile Numnber!"
        lblInvalidContactNum.style.visibility="visible";
        lblInvalidContactNum.style.color = "red" 
        mobileNo.style.border = "solid 3px red";
    }

}