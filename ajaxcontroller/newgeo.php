<?php

require_once('../constants.php');
require_once(APP_PATH . 'controller/DB_actions.php');
require_once(APP_PATH . 'model/main.php');

if(!empty($_POST['geoid']) && !empty($_POST['object_alias']))
{
	$main = new MainModel();
	$regions = $main->getGeoById($_POST['geoid']);
	
	if(!empty($regions))
	{
		$object_alias = $_POST['object_alias'];
		require_once APP_PATH . 'view/select.tpl';
	}
}