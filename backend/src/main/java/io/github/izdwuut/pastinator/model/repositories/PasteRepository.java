package io.github.izdwuut.pastinator.model.repositories;

import io.github.izdwuut.pastinator.model.entities.Paste;
import org.springframework.data.repository.CrudRepository;

public interface PasteRepository extends CrudRepository<Paste, String> {
}
