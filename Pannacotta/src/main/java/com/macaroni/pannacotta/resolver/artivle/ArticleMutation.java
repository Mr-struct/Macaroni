package com.macaroni.pannacotta.resolver.artivle;

import java.util.Optional;

import org.springframework.stereotype.Component;

import com.macaroni.pannacotta.entity.Article;
import com.macaroni.pannacotta.repository.ArticleRepository;
import com.macaroni.pannacotta.resolver.entity.EntityMutation;

@Component
public class ArticleMutation extends EntityMutation<Article> {

	public ArticleMutation(ArticleRepository repository) {
		super(repository);
	}

  public Article createArticle(String title, String text) {
      Article article = new Article(title, text);
		  return create(article);
	}

	public Article updateArticle(Long id, String title, String text) {
		Optional<Article> article = getRepository().findById(id);
		article.ifPresent(a -> {
			a.setTitle(title);
			a.setText(text);
			getRepository().save(a);
		});
		return article.get();
	}

	public boolean deleteArticle(Long id) {
		return delete(id);
	}
}
