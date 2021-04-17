<?php

try {
    if (empty($_GET['format']) === true) {
        throw new Exception('Bad Request');
    }

    if (empty($_GET['type']) === true) {
        throw new Exception('Bad Request');
    }

    if ($_GET['format'] !== 'js') {
        throw new Exception('Bad Request');
    }

    $filePath = __DIR__ . '/../output/'. $_GET['type'] .'.json';
    if (file_exists($filePath) === false) {
        throw new Exception('Bad Request');
    }

    header('Content-Type: text/javascript');
    echo file_get_contents($filePath);
    exit;
} catch (Exception $e) {
    header('HTTP/1.0 400 Bad Request');
}