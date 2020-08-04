<?php

$servername="localhost";
$username="root";
$password="";
$dbname="homedb";

$conn= mysqli_connect($servername,$username,$password,$dbname);

if(!$conn){
   die("connection faild".mysqli_connect_error());
}
else
{
   $checkin = $_POST['fdate'];
   $checkout = $_POST['edate'];
   $adults = $_POST['adult'];
   $children =$_POST['children'];

   $sql ="INSERT INTO availability(checkIN,checkOUT,Adults,Children) VALUES ('$checkin','$checkout','$adults','$children') ;";

  if(mysqli_query($conn,$sql)==TRUE)
  {
      echo "Recod added succesfuly";
  }
  else
  {
      echo "error";
  }

}


?>
