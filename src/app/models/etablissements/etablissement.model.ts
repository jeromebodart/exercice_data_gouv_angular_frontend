import { Entreprise } from '../entreprise.model';
import { AdresseDeclaree } from './adresse-declaree/adresse-declaree.model';
import { AdresseNormalisee } from './adresse-normalisee/adresse-normalisee.model';
import { InformationsEtablissement } from './informations-etablissement/informations-etablissement.model';
import { AdresseGeographique } from './adresse-geographique/adresse-geographique.model';
import { LocalisationGeographique } from './localisation-geographique/localisation-geographique.model';
import { CaracteristiquesEconomiques } from './caracteristiques-economiques/caracteristiques-economiques-etablissement.model';

export class Etablissement {
	id: number;
	nic: number;
	entreprise: Entreprise;
	adresseDeclaree: AdresseDeclaree;
	adresseNormalisee: AdresseNormalisee;
	info: InformationsEtablissement;
	adresseGeographique: AdresseGeographique;
	localisationGeographique: LocalisationGeographique;
	economies: CaracteristiquesEconomiques;
	constructor(id: number,
	nic: number,
	entreprise: Entreprise,
	adresseDeclaree: AdresseDeclaree,
	adresseNormalisee: AdresseNormalisee,
	info: InformationsEtablissement,
	adresseGeographique: AdresseGeographique,
	localisationGeographique : LocalisationGeographique,
	economies: CaracteristiquesEconomiques) {
		this.id = id;
		this.nic = nic;
		this.entreprise = entreprise;
		this.adresseDeclaree = adresseDeclaree;
		this.adresseNormalisee = adresseNormalisee;
		this.info = info;
		this.adresseGeographique = adresseGeographique;
		this.localisationGeographique = localisationGeographique;
		this.economies = economies;
	}
}