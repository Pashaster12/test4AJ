<?php

require_once('../constants.php');
require_once(APP_PATH . 'controller/DB_actions.php');
require_once(APP_PATH . 'model/user.php');

if(!empty($_POST))
{
	$user_model = new UserModel();
	$user = $user_model->selectUser($_POST['email']);
	
	if(empty($user)) $user_model->newUser($_POST['login'], $_POST['email'], $_POST['territory']);
	
	$_POST = array();
	
	require_once APP_PATH . 'view/usercard.tpl';
}