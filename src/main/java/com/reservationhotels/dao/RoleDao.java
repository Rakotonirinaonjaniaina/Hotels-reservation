package com.reservationhotels.dao;

import henry.hotel.entity.Role;

//DAO Pattern for Role
public interface RoleDao {

	public Role findRoleByName(String roleName);
	
}
