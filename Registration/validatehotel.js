function validate() {

    var customername = document.forms["form1"]["cname"].value;
    var username = document.forms["form1"]["uname"].value;
    var password = document.forms["form1"]["pwd"].value;
    var confirmpassword = document.forms["form1"]["cpwd"].value;
    var email = document.forms["form1"]["email"].value;
    var confirmemail = document.forms["form1"]["cemail"].value;
    var emailformat = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;





    if (customername == "") {
        alert("Please fill the name field");
        return false;

    } else if (username == "") {
        alert("Please fill the username field");
        return false;
    } else if (password.length <= 5) {
        alert("Please create a strong passsword containing more than 5 characters");
        return false;
    } else if (password == "") {
        alert("Please Create a password");
        return false;
    } else if (confirmpassword == "") {
        alert("Please fill the confirm password field");
        return false;
    } else if (email == "") {
        alert("Please insert your email!");
        return false;

    } else if (!emailformat.test(email)) {
        alert("Valid email address please");
        return false;

    } else if (confirmemail == "") {
        alert("Please enter your confirm email address field");
        return false;
    } else if (password != confirmpassword) {
        alert("Your password didn't matched, Please check again!");
        return false;
    } else if (email != confirmemail) {
        alert("Your email didn't matched, Please check again!");
        return false;
    } else {
        alert("Registration Successful!");
        return true;
    }




}