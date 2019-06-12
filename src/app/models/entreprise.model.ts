import { InformationsSiege } from './informations-siege/informations-siege.model';
import { IdentificationEntreprise } from './identification-entreprise/identification-entreprise.model';
import { Etablissement } from './etablissements/etablissement.model';
import { CaracteristiquesEconomiques } from './caracteristiques-economiques-entreprise/caracteristiques-economiques.model';

export class Entreprise {
	id: number;
	siren: number;
	etablissements: Etablissement[];
	siege: InformationsSiege;
	identification_entreprise: IdentificationEntreprise;
	caracteristiques_economiques: CaracteristiquesEconomiques;
	constructor(id: number,
	siren: number,
	etablissements: Etablissement[],
	siege: InformationsSiege,
	identification_entreprise: IdentificationEntreprise,
	caracteristiques_economiques: CaracteristiquesEconomiques) {
		this.id = id;
		this.siren = siren;
		this.etablissements = etablissements;
		this.identification_entreprise = identification_entreprise;
		this.caracteristiques_economiques = caracteristiques_economiques;
	}
}