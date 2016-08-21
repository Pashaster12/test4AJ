<?php

class MainModel
{
	public function getGeoById($parent_id)
	{
		if(!empty($parent_id)) $where_par = ' ter_pid = ' . (int)$parent_id;
		else $where_par = ' ter_pid IS NULL';
		
		$db = new DB();
		$query = $db->query("SELECT ter_id, ter_pid, ter_address FROM t_koatuu_tree WHERE " . $where_par);
		
		$result = isset($query) ? $query : array();
			
		return $result;
	}
	
	public function getGeoByAddr($address)
	{
		if(!empty($address))
		{
			$db = new DB();
			$geo_address = $db->escape_string($address);
			
			$query = $db->query("SELECT ter_id FROM t_koatuu_tree WHERE ter_address = '" . $geo_address . "'");
		}
		
		$result = isset($query[0]['ter_id']) ? $query[0]['ter_id'] : 0;
			
		return $result;
	}
}

?>