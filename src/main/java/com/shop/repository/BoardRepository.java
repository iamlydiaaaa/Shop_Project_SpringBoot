package com.shop.repository;

import com.shop.entity.Board;
import org.springframework.data.repository.CrudRepository;


public interface BoardRepository extends CrudRepository<Board, Long> {

}
