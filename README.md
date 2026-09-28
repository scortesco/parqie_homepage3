# Parqie

Pre-launch homepage (Romanian) and waitlist API.

| Path | What |
| --- | --- |
| `web/` | React 18 + TypeScript + Vite + Tailwind, Zustand, React Router. The homepage. |
| `backend/` | Java 21, Spring Boot 3.4, PostgreSQL + Flyway. `POST /api/waitlist`. |
| `project/`, `chats/`, `DESIGN_HANDOFF.md` | Claude Design handoff bundle. `project/Parqie Homepage v3.dc.html` is the reference design. |

## Run locally

```bash
docker compose up -d                 # PostgreSQL 16 on :5432 (parqie/parqie)

cd backend && mvn spring-boot:run    # API on :8080, Flyway migrates on start

cd web && npm install && npm run dev # http://localhost:5173, proxies /api → :8080
```

Backend config (env vars): `DB_URL`, `DB_USER`, `DB_PASSWORD`, `CORS_ALLOWED_ORIGINS`.
Web config: `VITE_API_BASE_URL` if the API is not served from the same origin.

## Tests

```bash
cd backend && mvn test                                                   # web-layer tests
DB_URL=jdbc:postgresql://localhost:5432/parqie_test mvn test             # + Postgres integration tests
cd web && npm run build                                                  # type-check + build
```

## Waitlist API

`POST /api/waitlist`

```json
{ "email": "ana@exemplu.md", "location": "Botanica, str. Dacia", "source": "zone" }
```

- `source`: `nav` | `hero` | `priority` | `zone` (which call to action was used).
- `location` is optional, up to 200 chars.
- `204` on success, whether the email is new or already listed (the API doesn't reveal who is on the list). One row per email, lower-cased; signing up again keeps the first `source` and updates `location` if a new one is given.
- `400` (problem+json) on an invalid email, unknown source or overlong fields.

## Notes on the homepage

- Fonts are self-hosted via `@fontsource` (Plus Jakarta Sans for the page, Montserrat for the FAQ, as in the design).
- Layout breakpoints from the design live in `web/tailwind.config.ts` (`zones4` 560, `foot4` 640, `three` 900, `nav` 1000, `foot5` 1100).
- Animations (floating pin, glow) are disabled under `prefers-reduced-motion`.
- Placeholder links (`#`): Intră în cont, Ajutor, Contactează-ne, Job-uri, legal pages, social links, store badges.
