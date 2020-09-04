package io.github.com.pastinator.controller;

import io.github.com.pastinator.model.entity.Paste;
import io.github.com.pastinator.model.repository.PasteRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@Data
@NoArgsConstructor
@RequestMapping("/paste")
public class PasteController {
    @Autowired
    private PasteRepository pasteRepository;

    @PostMapping("")
    public Paste addPaste(@RequestBody Paste newPaste) {
        pasteRepository.save(newPaste);
        // Check if date is in the future.
        return newPaste;
    }

    @GetMapping("/{hash}")
    public Paste getPaste(@PathVariable("hash") String hash) {
        return new Paste();
    }
}
