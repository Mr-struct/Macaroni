package com.macaroni.pannacotta.repository;

import com.macaroni.pannacotta.entity.Article;

import org.springframework.context.annotation.Primary;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 * 
 * @author mr-struct
 */
@Primary
@Repository
public interface ArticleRepository extends CrudRepository<Article, Long> {

}
