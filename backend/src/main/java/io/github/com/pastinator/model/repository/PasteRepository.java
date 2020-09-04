package io.github.com.pastinator.model.repository;

import io.github.com.pastinator.model.entity.Paste;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PasteRepository extends CrudRepository<Paste, Integer> {
}
