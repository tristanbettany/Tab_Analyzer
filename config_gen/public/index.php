<?php

if (empty($_GET['format']) === false) {
    if ($_GET['format'] === 'js') {
        header('Content-Type: text/javascript');

        echo file_get_contents(__DIR__ . '/../output/config.json');
    } else {
        header('HTTP/1.0 400 Bad Request');
    }
} else {
    header('HTTP/1.0 400 Bad Request');
}