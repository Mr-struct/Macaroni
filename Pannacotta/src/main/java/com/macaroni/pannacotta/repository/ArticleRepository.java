package com.macaroni.pannacotta.repository;

import com.macaroni.pannacotta.entity.Article;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author mr-struct
 */
@Repository
public interface ArticleRepository extends CrudRepository<Article, Long> {

}
