package com.khj.blog.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.khj.blog.model.User;

// DAO
// 자동으로 bean등록이 된다.
// @Repository 생략이 가능하다.
public interface UserRepository extends JpaRepository<User, Integer> {
	Optional<User> findByUsername(String username);
}

//JPA Naming 쿼리
// SELECT * FROM user WHERE username = ? AND password = ?;
// User findByUsernameAndPassword(String username, String password);