package io.github.izdwuut.pastinator.model.entities;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.Date;

@Entity
@Data
@Table(name="pastes")
public class Paste {
    @Id
    private String hash;
    private String paste;
    private String author;
    private String title;
    private Date expires;
}
