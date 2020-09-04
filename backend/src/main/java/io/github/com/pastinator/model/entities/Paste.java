package io.github.com.pastinator.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class Paste {
    Integer id;
    String paste;
    String author;
    Date range;
    Date expires;
}
