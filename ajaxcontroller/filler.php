<?php

require_once('../constants.php');
require_once(APP_PATH . 'controller/DB_actions.php');
require_once(APP_PATH . 'model/main.php');
	
if(!empty($_POST['selval']) && !empty($_POST['object_alias']))
{
	$geoval = $_POST['selval'];
	
	$main = new MainModel();
	$geo_id = $main->getGeoByAddr($_POST['selval']);
	
	if(!empty($geo_id))
	{
		$regions = $main->getGeoById($geo_id);
		
		if(!empty($regions))
		{
			$object_alias = $_POST['object_alias'];
			require_once APP_PATH . 'view/select.html';
		}
	}
}

?>