<?php

require_once(APP_PATH . 'controller/DB_actions.php');

class UserModel extends DB
{
	public function newUser($login, $email, $ter)
	{
		if (!empty($login) && !empty($email) && !empty($ter))
		{
			$user_name = $this->escape_string($login);
			$user_email = $this->escape_string($email);
			$user_ter = $this->escape_string($ter);
			
			$this->iud_action("INSERT INTO users SET name = '" . $user_name . "', email = '" . $user_email . "', territory = '" . $user_ter . "'");
		}
	}
	
	public function selectUser($email)
	{
		if (!empty($email))
		{
			$user_email = $this->escape_string($email);
			
			$query = $this->select("SELECT name, email, t_koatuu_tree.ter_address as territory FROM users INNER JOIN t_koatuu_tree ON t_koatuu_tree.ter_id = users.territory WHERE email = '" . $user_email . "'");
		}
		
		$result = !empty($query[0]) ? $query[0] : array();
		
		return $result;
	}
}