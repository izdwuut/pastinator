package io.github.izdwuut.pastinator.controllers;

import com.google.common.hash.Hashing;
import io.github.izdwuut.pastinator.model.entities.Paste;
import io.github.izdwuut.pastinator.model.repositories.PasteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Random;

@RestController
@RequestMapping("/paste")
public class PasteController {
    @Autowired
    private PasteRepository pasteRepository;

    @PostMapping("")
    public Paste addPaste(@RequestBody Paste newPaste) {
        if(newPaste.getPaste() == null || newPaste.getPaste().equals("")) {
            return new Paste();
        }
        if(newPaste.getExpires() != null) {
            SimpleDateFormat validExpiresFormatter = new SimpleDateFormat("yyyy-MM-dd");
            try {
                Date currentDate = validExpiresFormatter.parse(validExpiresFormatter.format(new Date()));
                if(newPaste.getExpires().compareTo(currentDate) < 0) {
                    return new Paste();
                }
            } catch (ParseException e) {
                return new Paste();
            }
        }
        while (true) {
            Integer seed = new Random().nextInt();
            String hash = Hashing.sha256().newHasher().putLong(seed).hash().toString().substring(0, 15);
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
            return new Paste();
        }
        return paste;
    }
}
