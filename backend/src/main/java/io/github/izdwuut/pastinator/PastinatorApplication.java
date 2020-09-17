package io.github.izdwuut.pastinator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableScheduling
@EntityScan(basePackages = "io.github.izdwuut.pastinator.model.entities")
public class PastinatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(PastinatorApplication.class, args);
	}

}
