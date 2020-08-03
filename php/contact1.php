?php


$firstname = $_Request['firstname'];
$lastname = $_Request['lastname'];
$phonenumber = $_Request['phonenumber'];
$email= $_Request['email'];


?>

<table border="1px solid black">
    <tr>
        <td>First Name</td>
        <td><?php echo $firstname ?></td>
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