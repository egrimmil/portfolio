# Data model: Portfolio v1

Source of truth for values: `clarifications.md`. This file is the shape for `data/*.ts`.

## Locale

```ts
type Locale = 'en' | 'es';
```

Default: `en`. Guard unknown strings before use; otherwise `notFound()`.

## Localized string

```ts
type Copy = Record<Locale, string>;
```

Every user-facing sentence that differs by language uses `Copy`. Do not leave an `en` key without `es` (spec: complete pairs).

## Profile

| Field | Type | Notes |
| --- | --- | --- |
| name | `string` | Elkin Fracica (same in both locales) |
| role | `Copy` | Android / Kotlin Multiplatform Developer |
| aboutHeading | `Copy` | About / Sobre mí |
| about | `Copy` | Signed-off paragraphs (join with newlines or two fields) |
| location | `string` | Bogotá D.C., Colombia |
| locationLabel | `Copy` | Location / Ciudad |
| availability | `Copy` | Open to work / Disponible para trabajar |
| availabilityLabel | `Copy` | Availability / Disponibilidad |

## Project (home)

Exactly **four** objects, order newest first.

| Field | Type | Notes |
| --- | --- | --- |
| id | `string` | Stable slug for future v2, e.g. `attendance-saas`. **Not linked in v1.** |
| name | `string` | Untranslated product name |
| role | `Copy` | |
| url | `string \| null` | Play Store or `null` |
| inDevelopment | `boolean` | If true, show status, omit URL |
| statusLabel | `Copy` | In development / En desarrollo (only needed if `inDevelopment`) |
| tech | `string[]` | Distilled stack; same both locales |
| summary | `Copy \| null` | Attendance SaaS has copy; others `null` |

Ids (proposed): `attendance-saas`, `ikigii`, `baz-superapp`, `mi-claro-app`.

## Contact

| Field | Type | Notes |
| --- | --- | --- |
| label | `Copy` | Email / Correo, LinkedIn, GitHub |
| href | `string` | `mailto:elkin.fracica@gmail.com` or https URLs |

No phone field in the type. Do not add it “commented out”.

## Dictionary (UI chrome)

Keys such as: `workHeading`, `contactHeading`, `languageNavLabel`, `english`, `spanish`, `externalLinkHint` (for screen readers on Play Store). All `Copy`.

## Metadata

| Locale | Title (proposed) | Description |
| --- | --- | --- |
| en | Elkin Fracica — Android / Kotlin Multiplatform Developer | From About sentence 1, truncated if needed |
| es | Elkin Fracica — Desarrollador Android / Kotlin Multiplatform | Spanish About sentence 1 |

Must not contain “Create Next App”.

## Validation rules for implementers

- Four home projects only.
- `inDevelopment === true` ⇒ `url === null`.
- `url` present ⇒ `target` blank + `rel` noopener.
- Tech arrays are facts from clarifications card-tech column, not process bullets (no Jira, no Scrum).
