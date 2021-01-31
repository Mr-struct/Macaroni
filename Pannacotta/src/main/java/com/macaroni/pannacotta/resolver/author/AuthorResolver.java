package com.macaroni.pannacotta.resolver.author;

import java.util.List;

import com.macaroni.pannacotta.entity.Author;
import com.macaroni.pannacotta.repository.AuthorRepository;
import com.macaroni.pannacotta.resolver.entity.EntityResolver;

import org.springframework.stereotype.Component;

@Component
public class AuthorResolver extends EntityResolver<Author> {

  public AuthorResolver(AuthorRepository repository) {
    super(repository);
  }

  public Author author(Long id) {
    return entity(id);
  }

  public List<Author> authors() {
    return entities();
  }
}
