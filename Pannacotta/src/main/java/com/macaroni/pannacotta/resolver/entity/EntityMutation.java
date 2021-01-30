package com.macaroni.pannacotta.resolver.entity;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import graphql.kickstart.tools.GraphQLMutationResolver;

/**
 * @author mr-struct
 * Generic MutationResolver
 * @param <Entity>
 */
@Component
public class EntityMutation<Entity> implements GraphQLMutationResolver {

	private CrudRepository<Entity, Long> repository;

	public EntityMutation(CrudRepository<Entity, Long> repository) {
		this.repository = repository;
	}
	
	/**
	 * Create an entity
	 * @param entity
	 * @return
	 */
	public Entity create(Entity entity) {
		repository.save(entity);
		return entity;

	}

	/**
	 * Delete an entity
	 * @param id
	 * @return
	 */
	public boolean delete(Long id) {
		repository.deleteById(id);
		return true;
	}

	/**
	 * 
	 * @return
	 */
	public CrudRepository<Entity, Long> getRepository() {
		return repository;
	}
}
