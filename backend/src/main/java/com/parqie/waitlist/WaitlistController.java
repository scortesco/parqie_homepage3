package com.parqie.waitlist;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/waitlist")
public class WaitlistController {

    private final WaitlistService service;

    public WaitlistController(WaitlistService service) {
        this.service = service;
    }

    /**
     * Always 204 on a valid request, whether the email is new or already listed,
     * so the endpoint doesn't reveal who is on the list.
     */
    @PostMapping
    public ResponseEntity<Void> join(@Valid @RequestBody WaitlistRequest request) {
        service.join(request);
        return ResponseEntity.noContent().build();
    }
}
