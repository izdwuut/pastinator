package io.github.com.pastinator.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(value="io.github.com.pastinator.model.repository")
public class JPAConfig {
}