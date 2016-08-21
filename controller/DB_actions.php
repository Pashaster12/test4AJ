<?php

class DB
{
	function __construct()
	{
		$mysqli = new mysqli(DB_SERVER, DB_USER, DB_PASSWORD, DB);
		if ($mysqli->connect_errno) die("MySQL connection's failed! (" . $mysqli->connect_errno . ") " . $mysqli->connect_error);
		
		$this->link = $mysqli;
	}
	
	public function query($sql)
	{
		$mysqli = $this->link;
		
		if (!empty($sql))
		{
			if (strstr($sql, 'INSERT') or strstr($sql, 'UPDATE') or strstr($sql, 'DELETE'))
			{
				$result = $mysqli->query($sql);
			}
			else
			{
				$query = $mysqli->query($sql);
				$i = 0;
				$result = array();
				
				if(!empty($query))
				{
					while($row = $query->fetch_assoc())
					{
						$result[$i] = $row;
						$i++;
					}
				}
			}
		}
		
		return $result;
	}
	
	public function escape_string($string)
	{
		if (!empty($string))
		{
			$mysqli = $this->link;
			$result = $mysqli->real_escape_string($string);
		}
		
		return $result;
	}
	
	function __destruct()
	{
		$mysqli = $this->link;
		$mysqli->close();
	}
}
?>