<?php

//error_reporting(E_ERROR);

require_once('constants.php');
require_once(APP_PATH . 'controller/main.php');
require_once(APP_PATH . 'controller/DB_actions.php');

$main = new MainController();
$main->index();

?>