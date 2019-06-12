export class LocalisationGeographique {
	id: number;
	region: string;
	lib_region: string;
	departement: string;
	arrondissement: string;
	canton: string;
	commune: string;
	lib_commune: string;
	departement_unite_urbaine: string;
	taille_unite_urbaine: string;
	num_unite_urbaine: string;
	epci: string;
	tcd: string;
	zemet: string;
	constructor(id: number,
	region: string,
	lib_region: string,
	departement: string,
	arrondissement: string,
	canton: string,
	commune: string,
	lib_commune: string,
	departement_unite_urbaine: string,
	taille_unite_urbaine: string,
	num_unite_urbaine: string,
	epci: string,
	tcd: string,
	zemet: string) {
		this.id = id ;
		this.region = region;
		this.lib_region = lib_region;
		this.departement = departement;
		this.arrondissement = arrondissement;
		this.canton = canton;
		this.commune = commune;
		this.lib_commune = lib_commune;
		this.departement_unite_urbaine = departement_unite_urbaine;
		this.taille_unite_urbaine = taille_unite_urbaine;
		this.num_unite_urbaine = num_unite_urbaine;
		this.epci = epci;
		this.tcd = tcd;
		this.zemet = zemet;
	}
}