package com.parqie.waitlist;

import com.fasterxml.jackson.annotation.JsonCreator;
import com.fasterxml.jackson.annotation.JsonValue;

/** Which call to action on the homepage the signup came from. */
public enum SignupSource {
    NAV, HERO, PRIORITY, ZONE;

    @JsonValue
    public String json() {
        return name().toLowerCase();
    }

    @JsonCreator
    public static SignupSource fromJson(String value) {
        return value == null ? null : SignupSource.valueOf(value.trim().toUpperCase());
    }
}
