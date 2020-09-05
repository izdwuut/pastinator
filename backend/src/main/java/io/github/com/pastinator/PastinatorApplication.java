package io.github.com.pastinator;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages = "io.github.com.pastinator.model.entity")
@EnableAutoConfiguration
public class PastinatorApplication {

	public static void main(String[] args) {
		SpringApplication.run(PastinatorApplication.class, args);
	}

}
