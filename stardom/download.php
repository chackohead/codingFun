<?php

/* For Demonstration Purposes Only - Customizer Download Form */

if(empty($_POST['filename']) || empty($_POST['content'])){
	exit;
}

$filename = preg_replace('/[^a-z0-9\-\_\.]/i','',$_POST['filename']);

header("Cache-Control: ");
header("Content-type: text/css");
header('Content-Disposition: attachment; filename="'.$filename.'"');

echo $_POST['content'];

?>