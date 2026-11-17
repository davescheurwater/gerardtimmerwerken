# Willemstein Timmerwerken Website

Multipage website in Astro voor Willemstein Timmerwerken, met:

- Home, Over mij, Diensten, Projecten, FAQ, Contact, Offerte, Privacy
- Aparte pagina per dienst
- Aparte pagina per project
- Pages CMS-configuratie voor projecten en foto-uploads via GitHub

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
- Projectcontent: src/content/projects
- Pages CMS-configuratie: .pages.yml
- Projectfoto's: src/assets/projecten

## Wat je nog moet invullen

1. Contactgegevens vervangen in src/data/site.ts
2. EmailJS configureren in src/data/emailjs.ts:
	- public key
	- template ID (voor zowel contact als offerte)
3. Instagram URL invullen in src/data/site.ts

## Projecten beheren met Pages CMS

1. Ga naar [app.pagescms.org](https://app.pagescms.org/) en log in met GitHub.
2. Installeer de Pages CMS GitHub App voor deze repository en open de branch `main`.
3. Geef je zwager toegang via Pages CMS als collaborator (uitnodiging per e-mail) of geef zijn GitHub-account schrijfrechten op de repository.
4. Open **Projecten** en kies **Nieuw project**. Vul de titel, samenvatting, categorie, plaats, jaar en projectbeschrijving in.
5. Upload of selecteer een coverfoto en voeg eventueel foto's aan de galerij toe. Geef foto's unieke bestandsnamen (bijvoorbeeld `project-slug-cover.jpg` en `project-slug-01.jpg`). Sla het project op; Pages CMS schrijft de foto's naar `src/assets/projecten/` en de projectdata naar `src/content/projects/`.

De fotoverwijzingen worden automatisch opgeslagen. Bewerk afbeeldingspaden niet handmatig. Iedere commit op `main` start de build en publicatie via GitHub Actions.

## Eenmalige Strato SFTP-deploymentinstelling

De workflow gebruikt SFTP via SSH op poort 22. In tegenstelling tot de eerdere FTPS-configuratie gebruikt deze geen FTP-verbinding.

1. Open in het Strato-klantenlogin **Datenbanken und Webspace → SFTP & SSH**. Maak een SFTP-gebruiker aan (geen shelltoegang nodig) en stel het **startdirectory** in op de webroot: de map waarin de live `index.html` van de website hoort. De workflow uploadt naar `.` (de startmap van deze gebruiker); gebruik dus niet automatisch `/home/www/`.
2. Noteer de gepersonaliseerde servernaam, de automatisch aangemaakte gebruikersnaam en het wachtwoord. Strato gebruikt poort `22`.
3. Maak vanaf je eigen computer een eerste SFTP-verbinding met bijvoorbeeld FileZilla en controleer de host key/fingerprint. Haal daarna de host-keyregels op in Git Bash of WSL met `ssh-keyscan -p 22 <servernaam> > strato_known_hosts.txt` en controleer de fingerprint met `ssh-keygen -lf strato_known_hosts.txt`. De fingerprint moet overeenkomen met die van de vertrouwde SFTP-verbinding.
4. Open in GitHub **Settings → Secrets and variables → Actions** en voeg deze **repository secrets** toe:
	- `STRATO_SFTP_SERVER`: de gepersonaliseerde Strato-hostnaam.
	- `STRATO_SFTP_USERNAME`: de SFTP-gebruikersnaam.
	- `STRATO_SFTP_PASSWORD`: het SFTP-wachtwoord.
5. Voeg onder **Variables** (niet Secrets) een repository variable `STRATO_SFTP_KNOWN_HOSTS` toe. Plak daarin één volledige, geverifieerde regel uit `strato_known_hosts.txt` (hostnaam, sleuteltype en publieke hostsleutel). De hostsleutel is geen wachtwoord; de workflow gebruikt deze om de serveridentiteit te controleren en weigert onbekende sleutels.

Daarna bouwt en uploadt iedere push naar `main` de bestanden uit `dist/`. Je kunt de uitvoering volgen via het tabblad **Actions** in GitHub.

**Let op:** de SFTP-upload overschrijft en voegt bestanden toe, maar verwijdert geen bestanden die later uit `dist/` verdwijnen. Oude bestanden of routes kunnen daardoor op Strato blijven staan. Gebruik voor automatische verwijdering alleen een SSH-toegang met shell/rsync en een gecontroleerde doelmap.

## Opmerking over formulieren

Contact- en offerteformulieren gebruiken EmailJS en sturen na een succesvolle verzending door naar /bedankt.

Template voorbeeld voor EmailJS staat in `docs/emailjs-template.md`.
