export interface ServiceItem {
	slug: string;
	title: string;
	summary: string;
	details: string[];
}

export const services: ServiceItem[] = [
	{
		slug: 'kozijnen',
		title: 'Kozijnen',
		summary: 'Plaatsen, vervangen en afwerken van houten kozijnen met oog voor detail.',
		details: [
			'Vervangen of herstellen van kozijnen',
			'Nette afwerking binnen en buiten',
			'Advies over materiaal en onderhoud',
		],
	},
	{
		slug: 'aftimmering',
		title: 'Aftimmering',
		summary: 'Strakke aftimmering van ruimtes, dakranden, zolders en afwerkniveaus.',
		details: [
			'Aftimmeren van dakramen en knieschotten',
			'Plinten, koofconstructies en afwerkranden',
			'Snelle en schone montage',
		],
	},
	{
		slug: 'hang-en-sluitwerk',
		title: 'Hang- en sluitwerk',
		summary: 'Betrouwbaar hang- en sluitwerk voor deuren, ramen en veiligheid.',
		details: [
			'Monteren en vervangen van sloten',
			'Inmeten en afstellen van deuren',
			'Veiligheidsverbeteringen voor bestaande situaties',
		],
	},
	{
		slug: 'plafonds',
		title: 'Plafonds',
		summary: 'Verlaagde plafonds, strak regelwerk en nette plafonddetails.',
		details: [
			'Nieuwe plafonds in renovatie en nieuwbouw',
			'Voorbereiding voor spots en installaties',
			'Strak eindresultaat met aandacht voor aansluiting',
		],
	},
	{
		slug: 'scheidingswanden',
		title: 'Scheidingswanden',
		summary: 'Slimme indelingen met scheidingswanden op maat.',
		details: [
			'Inmeten en opbouwen van nieuwe wanden',
			'Geschikt voor woning en kleine utiliteit',
			'Met oog op isolatie en afwerking',
		],
	},
	{
		slug: 'verbouwingen',
		title: 'Verbouwingen',
		summary: 'Van kleine aanpassing tot complete verbouwing, met duidelijke planning.',
		details: [
			'Bouwkundige aanpassingen en timmerwerk',
			'Afstemming met andere vakmensen',
			'Helder contact tijdens het hele traject',
		],
	},
	{
		slug: 'maatwerk',
		title: 'Maatwerk',
		summary: 'Unieke oplossingen zoals kasten, ombouwen en slimme opbergruimte.',
		details: [
			'Ontwerp op basis van jouw wensen',
			'Maatwerk voor lastige hoeken en ruimtes',
			'Duurzame materialen en nette plaatsing',
		],
	},
];