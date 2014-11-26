<?php include 'Cache.php'; ?>

<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title>Testing</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <link href='http://fonts.googleapis.com/css?family=Poiret+One|Coming+Soon|Fredoka+One|Chewy|Bangers|Indie+Flower|Lobster' rel='stylesheet' type='text/css'>

        <link rel="stylesheet" href="css/style.css">

        <script src="js/vendor/modernizr-2.6.2-respond-1.1.0.min.js"></script>
    </head>
    <?php
    global $playground;
    $cache = new Cache();
    $font = $cache->fetch('font');
    ?>

    <body class="<?php if ($font) { echo $font; } ?><?php if ($playground) { echo " backmove"; } ?>">