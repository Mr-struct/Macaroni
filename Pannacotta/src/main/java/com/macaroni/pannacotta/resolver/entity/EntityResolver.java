package com.macaroni.pannacotta.resolver.entity;

import java.util.List;

import org.apache.commons.collections4.IteratorUtils;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Component;

import graphql.kickstart.tools.GraphQLQueryResolver;

/**
 * @author mr-struct Generic GraphQl Resolver
 * @param <Entity>
 */
@Component
public class EntityResolver<Entity> implements GraphQLQueryResolver {

	private CrudRepository<Entity, Long> repository;

	public EntityResolver(CrudRepository<Entity, Long> repository) {
		this.repository = repository;
	}

	/**
	 * Retrieve an entity by its id
	 * 
	 * @param id
	 * @return an entity that it id equals to the given id
	 */
	public Entity entity(Long id) {
		return repository.findById(id).orElse(null);
	}

	/**
	 * Retrieve all records of the specified entity
	 * 
	 * @return a list the specified entity
	 */
	public List<Entity> entities() {
		return IteratorUtils.toList(repository.findAll().iterator());
	}
}
