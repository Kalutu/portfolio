<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    // Replace with your actual email address
    $to = 'kalutudaniel@gmail.com';
    $subject = 'New Contact Form Submission';
    $message = "Name: {$data['name']}\n";
    $message .= "Email: {$data['email']}\n";
    $message .= "Subject: {$data['subject']}\n";
    $message .= "Message: {$data['message']}\n";

    // You may need to configure additional headers based on your mail server
    $headers = 'From: webmaster@example.com'; // Replace with your email or leave it empty

    $success = mail($to, $subject, $message, $headers);

    if ($success) {
        $response = [
            'status' => 'success',
            'message' => 'Form data received and email sent successfully!',
            'data' => $data,
        ];

        echo json_encode($response);
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Failed to send email. Please try again later.',
        ];

        echo json_encode($response);
    }
} else {
    http_response_code(405);
    echo json_encode(['error' => 'Method Not Allowed']);
}
?>
