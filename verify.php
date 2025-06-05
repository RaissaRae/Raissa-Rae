<?php
$env = parse_ini_file(__DIR__ . '/.env');

$correctPassword = isset($env['PDF_PASSWORD']) ? $env['PDF_PASSWORD'] : '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $enteredPassword = isset($_POST['password']) ? $_POST['password'] : '';

    if ($enteredPassword === $correctPassword) {
        $file = __DIR__ . '/protected/agfa_project_plan.pdf';
        if (file_exists($file)) {
            header('Content-Type: application/pdf');
            header('Content-Disposition: inline; filename="agfa_project_plan.pdf"');
            header('Content-Length: ' . filesize($file));
            readfile($file);
            exit;
        } else {
            http_response_code(404);
            echo "File not found.";
        }
    } else {
        http_response_code(401);
        echo "Wrong password.";
    }
} else {
    http_response_code(405);
}

