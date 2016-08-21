<?php

class UserModel
{
	public function newUser($login, $email, $ter)
	{
		if (!empty($login) && !empty($email) && !empty($ter))
		{			
			$db = new DB();
			
			$user_name = $db->escape_string($login);
			$user_email = $db->escape_string($email);
			$user_ter = $db->escape_string($ter);
			
			$db->query("INSERT INTO users SET name = '" . $user_name . "', email = '" . $user_email . "', territory = '" . $user_ter . "'");
		}
	}
	
	public function selectUser($email)
	{
		if (!empty($email))
		{			
			$db = new DB();
			$user_email = $db->escape_string($email);
			
			$query = $db->query("SELECT name, email, territory FROM users WHERE email = '" . $user_email . "'");
		}
		
		$result = !empty($query[0]) ? $query[0] : array();
		
		return $result;
	}
}

?>