function Validate() {
    //Regex for Valid Characters i.e. Alphabets, Numbers and Space.
    var regex = /^[A-Za-z0-9 ]+$/

    //Validate TextBox value against the Regex.
    var isValid = regex.test(document.getElementById("name").value);
    if (!isValid) {
        alert("Name should not contain any special letters.");
        
    }else{
        
        window.open("thankyou.html");
        
    }

    return isValid;
}