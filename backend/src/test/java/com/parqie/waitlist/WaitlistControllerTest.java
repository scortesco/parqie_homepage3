package com.parqie.waitlist;

import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.parqie.config.WebConfig;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.context.annotation.Import;
import org.springframework.http.MediaType;
import org.springframework.test.context.TestPropertySource;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(WaitlistController.class)
@Import(WebConfig.class)
@TestPropertySource(properties = "parqie.cors.allowed-origins=http://localhost:5173")
class WaitlistControllerTest {

    @Autowired
    private MockMvc mvc;

    @MockitoBean
    private WaitlistService service;

    private void postJson(String body, int expectedStatus) throws Exception {
        mvc.perform(post("/api/waitlist").contentType(MediaType.APPLICATION_JSON).content(body))
                .andExpect(status().is(expectedStatus));
    }

    @Test
    void acceptsValidSignup() throws Exception {
        postJson("""
                {"email":"ana@exemplu.md","location":"Centru, str. Pușkin","source":"zone"}
                """, 204);
        verify(service).join(new WaitlistRequest("ana@exemplu.md", "Centru, str. Pușkin", SignupSource.ZONE));
    }

    @Test
    void locationIsOptional() throws Exception {
        postJson("""
                {"email":"ana@exemplu.md","source":"nav"}
                """, 204);
    }

    @Test
    void rejectsInvalidEmail() throws Exception {
        postJson("""
                {"email":"not-an-email","source":"hero"}
                """, 400);
        verify(service, never()).join(any());
    }

    @Test
    void rejectsUnknownSource() throws Exception {
        postJson("""
                {"email":"ana@exemplu.md","source":"billboard"}
                """, 400);
    }

    @Test
    void rejectsMissingSource() throws Exception {
        postJson("""
                {"email":"ana@exemplu.md"}
                """, 400);
    }

    @Test
    void rejectsOverlongLocation() throws Exception {
        postJson("{\"email\":\"ana@exemplu.md\",\"source\":\"hero\",\"location\":\"" + "x".repeat(201) + "\"}", 400);
    }
}
