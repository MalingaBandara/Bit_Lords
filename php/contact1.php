<?php


$FirstName = $_REQUEST['fname'];
$lastname = $_REQUEST['lastname'];
$phonenumber = $_REQUEST['phonenumber'];
$email= $_REQUEST['email'];



?>

<table border="1px solid black">
    <tr>
        <td>First Name</td>
        <td><?php echo $FirstName ?></td>
</tr>
<tr>
        <td>Last Name</td>
        <td><?php echo $lastname ?></td>
</tr>
<tr>
        <td>phonenumber</td>
        <td><?php echo $phonenumber ?></td>
</tr>
<tr>
        <td>email</td>
        <td><?php echo $email  ?></td>
</tr>
</table>




