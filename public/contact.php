<?php
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if ($data === null && json_last_error() !== JSON_ERROR_NONE) {
        http_response_code(400);
        echo json_encode(['error' => 'Invalid JSON data']);
        exit;
    }

    $to = 'kalutudaniel@gmail.com';
    $subject = 'New Contact Form Submission';
    $message = "Name: {$data['name']}\n";
    $message .= "Email: {$data['email']}\n";
    $message .= "Subject: {$data['subject']}\n";
    $message .= "Message: {$data['message']}\n";

    $headers = 'From: kalutudaniel@gmail.com';

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
