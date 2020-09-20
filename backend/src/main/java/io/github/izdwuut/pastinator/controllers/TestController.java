package io.github.izdwuut.pastinator.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestController {
    @GetMapping("/")
    public String getSuccessMessage() {
        return "Success!";
    }
}
