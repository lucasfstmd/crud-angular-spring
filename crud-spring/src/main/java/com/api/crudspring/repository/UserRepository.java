package com.api.crudSpring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.api.crudSpring.model.UserModel;

public interface UserRepository extends JpaRepository<UserModel, Integer> {
}
