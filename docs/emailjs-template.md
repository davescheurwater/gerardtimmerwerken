# EmailJS Template Willemstein Timmerwerken

Gebruik dit als basis in EmailJS voor template ID `template_803t694`.

## Suggested Subject

`{{onderwerp}}`

## Template Content (Plain Text)

```
Nieuw bericht via website Willemstein Timmerwerken

Formulier: {{formulier_type}}
Onderwerp: {{onderwerp}}

Naam: {{naam}}
E-mail: {{email}}
Telefoon: {{telefoon}}
Regio: {{regio}}
Type klus: {{type_klus}}
Startperiode: {{startperiode}}
Budget: {{budget}}
Privacy akkoord: {{privacy_akkoord}}

Bericht:
{{bericht}}
```

## Template Content (HTML)

```html
<h2>Nieuw bericht via Willemstein Timmerwerken</h2>
<p><strong>Formulier:</strong> {{formulier_type}}</p>
<p><strong>Onderwerp:</strong> {{onderwerp}}</p>

<hr />

<p><strong>Naam:</strong> {{naam}}</p>
<p><strong>E-mail:</strong> {{email}}</p>
<p><strong>Telefoon:</strong> {{telefoon}}</p>
<p><strong>Regio:</strong> {{regio}}</p>
<p><strong>Type klus:</strong> {{type_klus}}</p>
<p><strong>Startperiode:</strong> {{startperiode}}</p>
<p><strong>Budget:</strong> {{budget}}</p>
<p><strong>Privacy akkoord:</strong> {{privacy_akkoord}}</p>

<h3>Bericht</h3>
<p>{{bericht}}</p>
```

## Notes

- Voor het contactformulier blijven sommige offerte-velden leeg, dat is normaal.
- Voor het offerteformulier zijn bijna alle velden ingevuld.
- Zet in EmailJS bij `Reply To` het veld `{{email}}`, zodat je direct kunt antwoorden.