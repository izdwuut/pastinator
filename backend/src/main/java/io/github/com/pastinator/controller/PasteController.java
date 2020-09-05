package io.github.com.pastinator.controller;

import io.github.com.pastinator.model.entity.Paste;
import io.github.com.pastinator.model.repository.PasteRepository;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.google.common.hash.Hashing;

import java.util.Random;

@RestController
@Data
@NoArgsConstructor
@RequestMapping("/paste")
public class PasteController {
    @Autowired
    private PasteRepository pasteRepository;

    @PostMapping("/add")
    public Paste addPaste(@RequestBody Paste newPaste) {
        // Check if date is in the future.
        if (newPaste.getPaste() == null) {
            return new Paste();
        }
        while (true) {
            String hash = Hashing.sha256().newHasher().putLong((new Random()).nextInt()).hash().toString().substring(0, 16);
            if (pasteRepository.findByHash(hash) != null) {
                continue;
            }
            newPaste.setHash(hash);
            break;
        }
        return pasteRepository.save(newPaste);
    }

    @GetMapping("/{hash}")
    public Paste getPaste(@PathVariable("hash") String hash) {
        Paste paste = pasteRepository.findByHash(hash);
        if (paste == null) {
            System.out.println("aa");
            return new Paste();
        }
        return paste;
    }
}
