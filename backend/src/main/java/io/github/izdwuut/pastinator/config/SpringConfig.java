package io.github.izdwuut.pastinator.config;

import com.google.common.collect.Lists;
import io.github.izdwuut.pastinator.model.entities.Paste;
import io.github.izdwuut.pastinator.model.repositories.PasteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.scheduling.annotation.Scheduled;

import java.util.Date;
import java.util.List;

@Configuration
public class SpringConfig {
    @Autowired
    PasteRepository pasteRepository;

    @Scheduled(cron = "${removeExpiredPastes.cron.expression}")
    public void removeExpiredPastes() {
        List<Paste> expired = Lists.newArrayList(pasteRepository.findByExpiresBefore(new Date()));
        pasteRepository.deleteAll(expired);
    }
}
