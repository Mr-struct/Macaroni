package com.macaroni.pannacotta.repository;

import com.macaroni.pannacotta.entity.Author;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author mr-struct
 */
@Repository
public interface AuthorRepository extends CrudRepository<Author, Long> {

}
