<?php

    //Sample query string
    $query = 'Hello';
    echo $query;

    //get the data from the request
    $first_name = $_GET['first_name'];
    $last_name = $_GET['last_name'];



?>

<!DOCTYPE html>
<html>
    <head>
        <title>Nmae test</title>
        <link ref="stylesheet" type="text/css" href="main.css">
    </head>
    <body>
        <h2>Welcome</h2>
        <p>first name: <?php echo $first_name; ?></p>
        <p>last name: <?php echo $last_name; ?></p>
    </body>
</html>