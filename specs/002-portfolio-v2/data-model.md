# Data model: Portfolio v2

Values: `clarifications.md`. Types extend v1 `Copy` / `Locale`.

## SkillGroup

| Field | Type | Notes |
| --- | --- | --- |
| id | `'mobile' \| 'architecture' \| 'backend' \| 'development'` | |
| heading | `Copy` | |
| items | `string[]` | Untranslated names, signed order |

## Role

| Field | Type | Notes |
| --- | --- | --- |
| id | `string` | e.g. `attendance-saas`, `vass`, `multiplica`, `wigilabs-lead`, `wigilabs-android`, `publicar`, `wigilabs-web` |
| heading | `string` | Company or product name (same both locales) |
| employer | `string \| null` | `null` for own product |
| title | `Copy` | |
| period | `Copy` | e.g. Sep 2023 – Aug 2026 |
| duration | `Copy` | Derived, signed |
| context | `Copy \| null` | Towerbank - ikigii, teams, project lists |
| bullets | `Copy[]` | Complete EN/ES pairs; no extra tools |

Experience array order: attendance-saas, vass, multiplica, wigilabs-lead, wigilabs-android, publicar.  
Web array: wigilabs-web only.
