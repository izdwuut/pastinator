package io.github.izdwuut.pastinator.model.repositories;

import io.github.izdwuut.pastinator.model.entities.Paste;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;

public interface PasteRepository extends CrudRepository<Paste, String> {
    Paste findByHash(String hash);
    Paste[] findByExpiresBefore(Date date);
}
