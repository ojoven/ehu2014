<?php
include 'Cache.php';

if (isset($_POST['font'])) {
	$cache = new Cache();
	$cache->store('font',$_POST['font']);
	$data['success'] = true;
	$data['font'] = $_POST['font'];
} else {
	$data['success'] = false;
}

echo json_encode($data);

header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');