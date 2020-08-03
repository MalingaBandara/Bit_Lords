function  validateForm() {
	var firstname = document.forms['form1']['firstname'].value;
	var lastname = document.forms["form1"]["lastname"].value;
    var email = document.forms["form1"]["email"].value; 
	var phonenumber = document.forms["form1"]["phonenumber"].value;

	

	if (firstname=="")
	{
		alert("Firstname is empty");
		return false;
	}
	if (lastname=="")
	{
		alert("Lastname is empty");
		return false;
	}
	
	if (!email.includes("@","."))
	{
		alert("Invalid email!");
		return false;
	}

	
	if (isNaN(phonenumber) || phonenumber.length=0)
	{
		alert("Enter a valid phone number");
		return false;
	}
	

	




}