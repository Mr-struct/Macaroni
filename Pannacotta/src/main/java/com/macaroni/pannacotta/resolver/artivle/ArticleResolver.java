package com.macaroni.pannacotta.resolver.artivle;

import java.util.List;

import com.macaroni.pannacotta.entity.Article;
import com.macaroni.pannacotta.repository.ArticleRepository;
import com.macaroni.pannacotta.resolver.entity.EntityResolver;

import org.springframework.stereotype.Component;

/**
 * Resolver for Article
 * @author mr-struct
 *
 */
@Component
public class ArticleResolver extends EntityResolver<Article>{

	public ArticleResolver(ArticleRepository repository) {
		super(repository);

	}
	
	public Article article(Long id) {
		return entity(id);
	}

	public List<Article> articles() {
		return entities();
	}
}
