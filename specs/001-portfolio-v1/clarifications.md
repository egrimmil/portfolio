# Clarifications — 001-portfolio-v1

Recorded 2026-09-28. Facts come from Elkin; agents must not expand them.

## Q1 Bio — resolved (wording signed off)

- Public role includes **Kotlin Multiplatform**. The KMP work is **Cross-Platform Attendance SaaS**, still in development, no public URL yet. Do not show “7 months” on the home.
- **Master’s in cybersecurity** appears on the home.
- Home bio is the signed-off **About** copy below (EN source + ES translation). Do not substitute the long CV.
- Do **not** put “7 months” on the live home.

### Home copy (signed off)

**Section heading**

- EN: About
- ES: Sobre mí

**English**

I’m a Systems Engineer with a Master’s degree in Cybersecurity and a software engineer specialized in Android and Kotlin Multiplatform. I design and build reliable, scalable mobile applications using Kotlin, Jetpack Compose, Clean Architecture, and modern development practices.

My experience combines mobile development, software architecture, application security, and cross-platform engineering. I enjoy turning complex requirements into maintainable products and continuously exploring better ways to build and deliver software.

**Spanish**

Soy ingeniero de sistemas con maestría en ciberseguridad y, como ingeniero de software, me especializo en Android y Kotlin Multiplatform. Diseño y construyo aplicaciones móviles confiables y escalables con Kotlin, Jetpack Compose, Clean Architecture y prácticas de desarrollo modernas.

Mi experiencia combina desarrollo móvil, arquitectura de software, seguridad de aplicaciones e ingeniería multiplataforma. Disfruto convertir requisitos complejos en productos mantenibles y explorar de forma continua mejores maneras de construir y entregar software.

**Role line**

- EN: Android / Kotlin Multiplatform Developer
- ES: Desarrollador Android / Kotlin Multiplatform

## Locale — resolved

- Public site: **English and Spanish**. Visitor selects the language.
- `html lang` and document metadata MUST match the active locale.
- **Default locale is English** when the visitor has not chosen yet.
- After they choose, a shared or reloaded view MUST stay in that language (mechanism belongs in the plan).

## Q2 Projects — resolved for v1 home

Order is **most recent → oldest**. Process bullets stay in notes. Card tech is distilled. No invented store URLs. In-development work uses an explicit status.

**v1 home (exactly four cards)**

| # | Name | Role EN | Role ES | URL / status | Card tech | One-liner |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | Cross-Platform Attendance SaaS | Development Lead | Líder de desarrollo | none — in development (EN: In development / ES: En desarrollo) | Kotlin Multiplatform, Compose Multiplatform, Kotlin, Firebase, Firestore, Koin, MVVM, Clean Architecture, Coroutines, Flow | EN: Cross-platform attendance product for Android and iOS, still in development. ES: Producto de gestión de asistencia para Android e iOS, aún en desarrollo. |
| 2 | ikigii | Tech Consultant | Consultor tecnológico | https://play.google.com/store/apps/details?id=com.towerbank.ikigii | Kotlin, Clean Architecture, MVVM, Hilt, Flow, Retrofit, Firebase, Glide, Lottie, JUnit, MockK | none (name + role + link only) |
| 3 | Baz Superapp | Android Developer | Desarrollador Android | https://play.google.com/store/apps/details?id=mx.app.baz.superapp | Kotlin, Clean Architecture, MVVM, Jetpack Compose, Hilt, Flow, Retrofit, Glide, Lottie, JUnit4, MockK | none |
| 4 | Mi Claro App | Android Team Lead, Android Developer | Líder de equipo Android, desarrollador Android | https://play.google.com/store/apps/details?id=com.clarocolombia.miclaro | Kotlin, Clean Architecture, Onion, MVVM, Jetpack, Firebase, Retrofit, Glide, Coil, Lottie, JUnit4, MockK, Mockito, GitHub Actions | none |

**Archive (not on v1 home)**

| Name | Role EN | Role ES | URL | Tech |
| --- | --- | --- | --- | --- |
| Claro Te Ayuda | Android Team Lead, Android Developer | Líder de equipo Android, desarrollador Android | https://play.google.com/store/apps/details?id=com.brm.claroTeAyuda | same as Mi Claro App |
| Fundación Santa Fe | same | same | none | same as Mi Claro App |
| Salud Total EPS | same | same | https://play.google.com/store/apps/details?id=com.saludtotal.saludtotaleps | same as Mi Claro App |
| Salud Total PAC | same | same | https://play.google.com/store/apps/details?id=com.wigilabs.saludtotal.pac | same as Mi Claro App |
| Rutapps | Android Developer | Desarrollador Android | https://play.google.com/store/apps/details?id=co.hidesoft.rutappsusuariofinal | Rutapps stack |
| App Miga | Android Developer | Desarrollador Android | https://play.google.com/store/apps/details?id=com.wigilabs.wwb | same as Rutapps |
| Eventos Yanbal | Android Developer | Desarrollador Android | none | same as Rutapps |
| AMC Motos | Android Developer | Desarrollador Android | none | same as Rutapps |
| Kromasol | Android Developer | Desarrollador Android | none | same as Rutapps |

### Attendance SaaS — source notes (Elkin)

Kotlin Multiplatform, Compose Multiplatform, Kotlin, Firebase, Firestore, Koin. Cross-platform attendance app for Android and iOS. Architecture: MVVM, Clean Architecture, Coroutines, Flow, Koin. Features: auth, companies and projects, check-in/check-out, location-based validation, filtering, pagination, role-based access. Firebase Authentication and Cloud Firestore. Shared Compose UI for Android and iOS. Unit tests. Independent lifecycle: requirements, architecture, development, testing, product evolution. No public URL yet.

### Other source notes

- **ikigii**: Clean, design patterns, MVVM, GitHub, estimates, features/bugs, started unit tests JUnit+MockK, Jira, Hilt, Flow, Retrofit, Scrum/Kanban, Glide, Lottie, Figma, Kotlin, Firebase, Play Store publish.
- **Baz Superapp**: same family as ikigii plus Jetpack Compose; GitLab + Azure; Jira + Confluence; JUnit4+MockK; no Firebase/Play publish listed.
- **Mi Claro App**: Clean + Onion; GitLab, Azure, GitHub; people management and onboarding other factories; estimates; new-project scope; code review; Play publish; MVVM; features/bugs; Jetpack; JUnit4, MockK, Mockito; started CI GitHub Actions; Scrum; design patterns; Firebase; Azure DevOps; Zeplin, XD; Glide, Coil, Lottie; Retrofit; Kotlin.
- **Claro Te Ayuda, Fundación Santa Fe, Salud Total EPS, Salud Total PAC**: same tech as Mi Claro App.
- **Rutapps**: GitLab, SourceTree (Git GUI), GitHub; Play publish; started Clean and Jetpack; Kanban; MVVM/MVC/MVP; Firebase; Azure DevOps; Zeplin, XD, InVision; Retrofit, OkHttp; Hilt, Dagger, Koin; SOLID; Glide, Picasso; libraries; Kotlin and Java.
- **App Miga, Eventos Yanbal, AMC Motos, Kromasol**: same tech as Rutapps.

## Q3 Contact — resolved

Public channels only (no phone). The mobile number is **not** stored in this repo and MUST NOT appear on the site.

| Type | Label EN | Label ES | Value |
| --- | --- | --- | --- |
| Email | Email | Correo | elkin.fracica@gmail.com |
| LinkedIn | LinkedIn | LinkedIn | https://www.linkedin.com/in/elkin-fracica/ |
| GitHub | GitHub | GitHub | https://github.com/egrimmil |

Email uses `mailto:` in implementation (plan). Do not invent other profiles.

## Q4 Location and availability — resolved

Show on the v1 home.

| Field | Label EN | Label ES | Value EN | Value ES |
| --- | --- | --- | --- | --- |
| City | Location | Ciudad | Bogotá D.C., Colombia | Bogotá D.C., Colombia |
| Availability | Availability | Disponibilidad | Open to work | Disponible para trabajar |

Spelling is **Bogotá** (not Bogotà).

## Q5 Work presentation — resolved

- **v1:** home list only (four cards). No per-project routes. Archive is not a public page.
- **v2 (out of this spec):** per-project pages **with screenshots**. Do not add those routes, screenshot assets, or fake galleries in v1.

Clarifications for `001-portfolio-v1` are complete. Next SDD step is `plan.md`.
