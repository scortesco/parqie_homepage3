package com.parqie.waitlist;

import java.util.Locale;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class WaitlistService {

    private final WaitlistRepository repository;

    public WaitlistService(WaitlistRepository repository) {
        this.repository = repository;
    }

    @Transactional
    public void join(WaitlistRequest request) {
        String email = request.email().trim().toLowerCase(Locale.ROOT);
        String location = request.location() == null || request.location().isBlank() ? null : request.location().trim();
        repository.upsert(email, location, request.source().name());
    }
}
