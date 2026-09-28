package com.parqie.waitlist;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.condition.EnabledIfEnvironmentVariable;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

/**
 * Runs Flyway + the upsert against a real PostgreSQL. Needs a throwaway database:
 * {@code DB_URL=jdbc:postgresql://localhost:5432/parqie_test mvn test}
 */
@SpringBootTest
@EnabledIfEnvironmentVariable(named = "DB_URL", matches = ".+")
class WaitlistIntegrationTest {

    @Autowired
    private WaitlistService service;

    @Autowired
    private WaitlistRepository repository;

    @BeforeEach
    void clean() {
        repository.deleteAll();
    }

    @Test
    void normalisesEmailAndKeepsOneRowPerAddress() {
        service.join(new WaitlistRequest("  Ana@Exemplu.MD ", "Centru", SignupSource.HERO));
        service.join(new WaitlistRequest("ana@exemplu.md", "Botanica, str. Dacia", SignupSource.ZONE));

        assertThat(repository.count()).isEqualTo(1);
        WaitlistSignup row = repository.findByEmail("ana@exemplu.md").orElseThrow();
        assertThat(row.getLocation()).isEqualTo("Botanica, str. Dacia");
        assertThat(row.getSource()).isEqualTo(SignupSource.HERO);
        assertThat(row.getCreatedAt()).isNotNull();
    }

    @Test
    void blankLocationDoesNotEraseAnEarlierOne() {
        service.join(new WaitlistRequest("ion@exemplu.md", "Rîșcani", SignupSource.ZONE));
        service.join(new WaitlistRequest("ion@exemplu.md", "   ", SignupSource.NAV));

        assertThat(repository.findByEmail("ion@exemplu.md").orElseThrow().getLocation()).isEqualTo("Rîșcani");
    }
}
