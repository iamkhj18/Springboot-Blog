package com.khj.blog.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.khj.blog.model.Board;

public interface BoardRepository extends JpaRepository<Board, Integer> {
}