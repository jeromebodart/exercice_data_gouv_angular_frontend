export class IdentificationEntreprise {
	id: number;
	raison_sociale: string;
	sigle: string;
	nom: string;
	prenom: string;
	civilite: string;
	repertoire_national_associations: string;

	constructor(id: number,
		raison_sociale: string,
		sigle: string,
		nom: string,
		prenom: string,
		civilite: string,
		repertoire_national_associations: string) 
		{ 
			this.id = id;
			this.raison_sociale = raison_sociale;
			this.nom = nom;
			this.prenom = prenom;
			this.civilite = civilite;
			this.repertoire_national_associations = repertoire_national_associations;
			this.sigle = sigle;
		}
}