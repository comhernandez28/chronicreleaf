<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$to = "info@chroniclb.com";
$subject = "Inquiry";

mail ($to, $subject, $message, "From: " . $name);
echo "Your message has been sent!";

?>
