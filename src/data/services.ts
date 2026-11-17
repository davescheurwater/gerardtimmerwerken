export interface ServiceItem {
	slug: string;
	title: string;
	summary: string;
	intro: string[];
	details: string[];
	applications: string[];
}

export const services: ServiceItem[] = [
	{
		slug: 'kozijnen',
		title: 'Kozijnen',
		summary: 'Plaatsen, vervangen en afwerken van houten kozijnen met oog voor detail.',
		intro: [
			'Kozijnen hebben veel invloed op comfort, uitstraling en isolatie van je woning. Daarom kijk ik bij elke klus naar de complete situatie: van het inmeten en plaatsen tot de aansluiting op bestaande wanden en afwerking.',
			'Of het nu gaat om vervanging van oudere kozijnen of herstel van delen die zijn aangetast, je krijgt een oplossing die technisch klopt en netjes oogt. Zo blijft het resultaat duurzaam en praktisch in dagelijks gebruik.',
		],
		details: [
			'Vervangen of herstellen van kozijnen',
			'Nette afwerking binnen en buiten',
			'Advies over materiaal en onderhoud',
		],
		applications: [
			'Vervangen van verouderde of tochtige kozijnen',
			'Herstel van houtrot en beschadigde delen',
			'Kozijnen voorbereiden op schilderwerk of verdere renovatie',
		],
	},
	{
		slug: 'aftimmering',
		title: 'Aftimmering',
		summary: 'Strakke aftimmering van ruimtes, dakranden, zolders en afwerkniveaus.',
		intro: [
			'Aftimmering maakt het verschil tussen een ruimte die "bijna af" is en een ruimte die echt klopt. Het draait om strakke lijnen, nette overgangen en details die aansluiten op de rest van het interieur.',
			'Ik zorg voor een afwerking die technisch goed in elkaar zit en tegelijk rustig oogt. Daarbij houd ik rekening met bestaande situaties, zodat nieuw en bestaand mooi op elkaar aansluiten.',
		],
		details: [
			'Aftimmeren van dakramen en knieschotten',
			'Plinten, koofconstructies en afwerkranden',
			'Snelle en schone montage',
		],
		applications: [
			'Afwerken van zolderruimtes en schuine kapdelen',
			'Nette omkasting van leidingen en installaties',
			'Strakke afwerking rond kozijnen, deuren en plafondaansluitingen',
		],
	},
	{
		slug: 'hang-en-sluitwerk',
		title: 'Hang- en sluitwerk',
		summary: 'Betrouwbaar hang- en sluitwerk voor deuren, ramen en veiligheid.',
		intro: [
			'Goed hang- en sluitwerk zorgt voor comfort en veiligheid in huis. Deuren en ramen moeten soepel sluiten, goed aansluiten en tegelijk een degelijk gevoel geven in gebruik.',
			'Ik kijk niet alleen naar losse onderdelen, maar naar de complete werking van het geheel. Daardoor voorkom je terugkerende problemen zoals klemmende deuren, slecht sluitende ramen of onveilige situaties.',
		],
		details: [
			'Monteren en vervangen van sloten',
			'Inmeten en afstellen van deuren',
			'Veiligheidsverbeteringen voor bestaande situaties',
		],
		applications: [
			'Vervangen van verouderd of versleten beslag',
			'Afstellen van klemmende deuren en ramen',
			'Extra beveiliging bij voordeuren en achterdeuren',
		],
	},
	{
		slug: 'plafonds',
		title: 'Plafonds',
		summary: 'Verlaagde plafonds, strak regelwerk en nette plafonddetails.',
		intro: [
			'Een plafond bepaalt sterk hoe een ruimte aanvoelt. Een strakke en vlakke afwerking geeft direct rust en zorgt dat verlichting en installaties beter tot hun recht komen.',
			'Bij nieuwe plafonds werk ik met aandacht voor maatvoering, hoogte en aansluitingen op bestaande wanden. Zo ontstaat een nette basis voor verdere afwerking en dagelijks gebruik.',
		],
		details: [
			'Nieuwe plafonds in renovatie en nieuwbouw',
			'Voorbereiding voor spots en installaties',
			'Strak eindresultaat met aandacht voor aansluiting',
		],
		applications: [
			'Verlagen van plafonds voor een strakke uitstraling',
			'Voorzieningen maken voor inbouwspots en ventilatie',
			'Herstel en verbetering van bestaande plafonds',
		],
	},
	{
		slug: 'scheidingswanden',
		title: 'Scheidingswanden',
		summary: 'Slimme indelingen met scheidingswanden op maat.',
		intro: [
			'Scheidingswanden zijn een praktische manier om een ruimte opnieuw in te delen zonder complete verbouwing. Je maakt eenvoudig aparte zones voor wonen, werken of opbergen.',
			'Ik bouw wanden met aandacht voor stevigheid, maatvoering en afwerking. Daarbij kijk ik ook naar zaken als geluidscomfort en toekomstige inrichting, zodat de nieuwe indeling echt werkt.',
		],
		details: [
			'Inmeten en opbouwen van nieuwe wanden',
			'Geschikt voor woning en kleine utiliteit',
			'Met oog op isolatie en afwerking',
		],
		applications: [
			'Extra kamer of werkplek creeren in bestaande ruimte',
			'Ruimtes logisch opdelen bij renovatie',
			'Wanden voorbereiden voor elektra en afwerking',
		],
	},
	{
		slug: 'verbouwingen',
		title: 'Verbouwingen',
		summary: 'Van kleine aanpassing tot complete verbouwing, met duidelijke planning.',
		intro: [
			'Bij een verbouwing draait het om overzicht en duidelijke stappen. Door vooraf goed af te stemmen, verloopt het werk rustiger en weet je beter waar je aan toe bent qua planning en uitvoering.',
			'Ik help bij bouwkundige aanpassingen en timmerwerk met oog voor het totaalbeeld. Van voorbereiding tot afronding houd ik het contact helder, zodat keuzes en voortgang voor iedereen duidelijk blijven.',
		],
		details: [
			'Bouwkundige aanpassingen en timmerwerk',
			'Afstemming met andere vakmensen',
			'Helder contact tijdens het hele traject',
		],
		applications: [
			'Herindeling van woonruimtes op de begane grond',
			'Combinatie van timmerwerk en afbouw in een project',
			'Gefaseerde verbouwing met duidelijke planning',
		],
	},
	{
		slug: 'maatwerk',
		title: 'Maatwerk',
		summary: 'Unieke oplossingen zoals kasten, ombouwen en slimme opbergruimte.',
		intro: [
			'Maatwerk is ideaal wanneer standaardoplossingen niet passen bij de ruimte of jouw wensen. Denk aan schuine daken, lastige hoeken of specifieke opbergbehoeften.',
			'Samen bepalen we wat praktisch is en welke uitstraling het beste past. Het resultaat is een oplossing die niet alleen mooi oogt, maar ook dagelijks prettig en efficient gebruikt kan worden.',
		],
		details: [
			'Ontwerp op basis van jouw wensen',
			'Maatwerk voor lastige hoeken en ruimtes',
			'Duurzame materialen en nette plaatsing',
		],
		applications: [
			'Inbouwkasten op zolder of onder een schuine kap',
			'Ombouwen rond technische installaties',
			'Slimme opbergruimte in compacte woonruimtes',
		],
	},
];