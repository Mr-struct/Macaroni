package com.macaroni.pannacotta.resolver.author;

import java.util.Optional;

import com.macaroni.pannacotta.entity.Author;
import com.macaroni.pannacotta.repository.AuthorRepository;
import com.macaroni.pannacotta.resolver.entity.EntityMutation;

import org.springframework.stereotype.Component;

@Component
public class AuthorMutation extends EntityMutation<Author> {

  public AuthorMutation(AuthorRepository repository) {
    super(repository);

  }

  public Author createAuthor(String firstName, String lastName) {
    return create(new Author(firstName, lastName));
  }

  public Author updateAuthor(Long id, String firstName, String lastName) {
    Optional<Author> author = getRepository().findById(id);
    author.ifPresent(a -> {
      a.setFirstName(firstName);
      a.setLastName(lastName);
      getRepository().save(a);
    });
    return author.get();
  }

  public boolean deleteAuthor(Long id) {
    return delete(id);
  }
}
