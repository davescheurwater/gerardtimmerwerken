# Gerard Timmerwerken Website

Multipage website in Astro voor Gerard Timmerwerken, met:

- Home, Over mij, Diensten, Projecten, FAQ, Contact, Offerte, Privacy
- Aparte pagina per dienst
- Aparte pagina per project
- CMS-koppeling (Decap CMS) voor projecten en foto uploads

## Project starten

1. Installeer dependencies
2. Start development server

```sh
npm install
npm run dev
```

Build voor productie:

```sh
npm run build
npm run preview
```

## Belangrijke plekken

- Pagina's: src/pages
- Layout en componenten: src/layouts, src/components
- Diensten/data: src/data
- Projectcontent (CMS): src/content/projects
- CMS admin: public/admin
- Uploads: public/uploads

## Wat je nog moet invullen

1. Contactgegevens vervangen in src/data/site.ts
2. Formspree ID invullen in:
	- src/pages/contact.astro
	- src/pages/offerte.astro
3. Instagram URL invullen in src/data/site.ts

## CMS gebruiken (projecten/foto's)

1. Open /admin in de browser
2. Login via git-gateway omgeving (bij hosting die dit ondersteunt)
3. Voeg projecten toe of pas ze aan
4. Upload foto's via het CMS (komen in public/uploads)

## Opmerking over formulieren

Na verzenden gaan formulieren naar /bedankt. Deze route bestaat in de site.
