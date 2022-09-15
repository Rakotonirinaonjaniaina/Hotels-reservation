package com.reservationhotels.dao;

import com.reservationhotels.entity.Role;

public interface RoleDao {

	public Role findRoleByName(String roleName);
	
}
