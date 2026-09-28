package com.parqie.waitlist;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface WaitlistRepository extends JpaRepository<WaitlistSignup, Long> {

    Optional<WaitlistSignup> findByEmail(String email);

    /**
     * Inserts a signup, or refreshes an existing one for the same email. The first
     * source is kept for attribution; a new non-null location replaces the old one.
     */
    @Modifying
    @Query(value = """
            INSERT INTO waitlist_signup (email, location, source)
            VALUES (:email, :location, :source)
            ON CONFLICT (email) DO UPDATE
               SET location   = COALESCE(EXCLUDED.location, waitlist_signup.location),
                   updated_at = now()
            """, nativeQuery = true)
    void upsert(@Param("email") String email, @Param("location") String location, @Param("source") String source);
}
