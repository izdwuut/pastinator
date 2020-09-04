package io.github.com.pastinator.controller;

import io.github.com.pastinator.model.entities.AddedPaste;
import io.github.com.pastinator.model.entities.Paste;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.bind.annotation.*;

@RestController
@Data
@NoArgsConstructor
@RequestMapping("/paste")
public class PasteController {
    @PostMapping("")
    public AddedPaste addPaste(@RequestBody AddedPaste newPaste) {
        return newPaste;
    }

    @GetMapping("/{hash}")
    public Paste getPaste(@PathVariable("hash") String hash) {
        return new Paste();
    }
}
