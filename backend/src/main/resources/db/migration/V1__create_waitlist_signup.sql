-- Pre-launch waitlist: one row per email (stored lower-cased).
CREATE TABLE waitlist_signup (
    id          BIGSERIAL    PRIMARY KEY,
    email       VARCHAR(254) NOT NULL,
    location    VARCHAR(200),
    source      VARCHAR(16)  NOT NULL,
    created_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
    updated_at  TIMESTAMPTZ  NOT NULL DEFAULT now(),
    CONSTRAINT uq_waitlist_signup_email UNIQUE (email),
    CONSTRAINT ck_waitlist_signup_email_lower CHECK (email = lower(email)),
    CONSTRAINT ck_waitlist_signup_source CHECK (source IN ('NAV', 'HERO', 'PRIORITY', 'ZONE'))
);

CREATE INDEX ix_waitlist_signup_location ON waitlist_signup (location);
