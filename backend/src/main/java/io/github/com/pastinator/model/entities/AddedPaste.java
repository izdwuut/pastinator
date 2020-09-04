package io.github.com.pastinator.model.entities;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@NoArgsConstructor
@Data
public class AddedPaste {
    String paste;
    String author;
    Date expires;
}
