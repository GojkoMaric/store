<?php

header("Access-Control-Allow-Origin: *");

$buyers = [
    [
        "id" => 1,
        "firstName" => 'John',
        "lastName" => 'Doe',
        "email" => 'john@example.com'
    ],
    [
        "id" => 2,
        "firstName" => 'Daniel',
        "lastName" => 'Ros',
        "email" => 'daniel@example.com'
    ],
    [
        "id" => 3,
        "firstName" => 'Martin',
        "lastName" => 'Hess',
        "email" => 'martin@example.com'
    ],
    [
        "id" => 4,
        "firstName" => 'John',
        "lastName" => 'Deere',
        "email" => 'john.deere@example.com'
    ]
];

echo json_encode($buyers);