<?php

require_once('../constants.php');
require_once(APP_PATH . 'controller/DB_actions.php');
require_once(APP_PATH . 'model/main.php');
	
if(!empty($_POST['selval']))
{
	$geoval = $_POST['selval'];
		
	$main = new MainModel();
	$cities = $main->getGeo($_POST['selval']);
}

$result = !empty($cities) ? true : false;

return $cities;

?>