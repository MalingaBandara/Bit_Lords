function validate() {

    var customername = document.forms["form1"]["cname"].value;
    var username = document.forms["form1"]["uname"].value;
    var password = document.forms["form1"]["pwd"].value;
    var confirmpassword = document.forms["form1"]["cpwd"].value;
    var email = document.forms["form1"]["email"].value;
    var confirmemail = document.forms["form1"]["cemail"].value;

    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");





    if (customername == "") {
        alert("Please fill the name field");
        return false;

    } else if (username == "") {
        alert("Please fill the username field");
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
    } else if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= email.length) {
        alert("Please enter a valid e-mail address ");
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