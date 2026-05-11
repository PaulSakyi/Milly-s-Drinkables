<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'src/Exception.php';
require 'src/PHPMailer.php';
require 'src/SMTP.php';

$mail = new PHPMailer(true);

try {

    // GET FORM DATA

    $productName = $_POST['productName'];
    $productPrice = $_POST['productPrice'];
    $productImage = $_POST['productImage'];

    $quantity = $_POST['quantity'];
    $phone = $_POST['phone'];
    $location = $_POST['location'];

    // SMTP SETTINGS

    $mail->isSMTP();

    $mail->Host = 'smtp.gmail.com';

    $mail->SMTPAuth = true;

    $mail->Username = 'paulsak123@gmail.com';

    // PUT YOUR APP PASSWORD HERE
    $mail->Password = 'fsvwhtxwwhrmhrhc';

    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

    $mail->Port = 587;

    // EMAIL SETTINGS

    $mail->setFrom('paulsak123@gmail.com', 'Milly Drinkables');

    $mail->addAddress('paulsak123@gmail.com');

    $mail->isHTML(true);

    $mail->Subject = 'New Order From Website';

    $mail->Body = "

    <h2>New Order Received</h2>

    <p><strong>Product:</strong> $productName</p>

    <p><strong>Price:</strong> $productPrice</p>

    <p><strong>Quantity:</strong> $quantity</p>

    <p><strong>Phone Number:</strong> $phone</p>

    <p><strong>Location:</strong> $location</p>

    <p>
        <strong>Product Image:</strong><br>
        <img src='$productImage' width='200'>
    </p>

    ";

    $mail->send();

    echo "Order sent successfully";

} catch (Exception $e) {

    echo "Message failed: " . $mail->ErrorInfo;
}

?>