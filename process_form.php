<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $story = htmlspecialchars($_POST['story']);

    $to = 'kamillab.mail@gmail.com'; // Replace with your email address
    $subject = 'New Story Submission';
    $body = "Name: $name\nEmail: $email\n\nStory:\n$story";
    $headers = "From: $email";

    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you for your submission!';
    } else {
        echo 'Sorry, something went wrong.';
    }
}
?>
