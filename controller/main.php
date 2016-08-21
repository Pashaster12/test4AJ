<?php

require_once(APP_PATH . 'model/main.php');

class MainController
{
	public function index()
	{
		$main_model = new MainModel();
		$regions = $main_model->getGeoById();
		
		$object_alias = 'region';
		
		require_once APP_PATH . 'view/main.html';
	}
}

?>