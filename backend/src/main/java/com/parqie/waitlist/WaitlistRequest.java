package com.parqie.waitlist;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record WaitlistRequest(
        @NotBlank @Email @Size(max = 254) String email,
        @Size(max = 200) String location,
        @NotNull SignupSource source) {
}
