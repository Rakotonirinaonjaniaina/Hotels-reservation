package com.reservationhotels.services;

import com.reservationhotels.entity.User;
import com.reservationhotels.temp.CurrentUser;

import org.springframework.security.core.userdetails.UserDetailsService;

//Service Pattern for User
public interface UserService extends UserDetailsService {

	public User findUserByEmail(String email);

	public void saveUser(CurrentUser currentUser);

	public int getLoggedUserId();
}
