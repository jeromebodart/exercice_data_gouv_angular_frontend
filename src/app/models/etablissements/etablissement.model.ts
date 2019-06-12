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
	adresse_declaree: AdresseDeclaree;
	adresse_normalisee: AdresseNormalisee;
	info: InformationsEtablissement;
	adressegeographique: AdresseGeographique;
	localisationgeographique: LocalisationGeographique;
	economies: CaracteristiquesEconomiques;
	constructor(id: number,
	nic: number,
	entreprise: Entreprise,
	adresse_declaree: AdresseDeclaree,
	adresse_normalisee: AdresseNormalisee,
	info: InformationsEtablissement,
	adressegeographique: AdresseGeographique,
	localisationgeographique : LocalisationGeographique,
	economies: CaracteristiquesEconomiques) {
		this.id = id;
		this.nic = nic;
		this.entreprise = entreprise;
		this.adresse_declaree = adresse_declaree;
		this.adresse_normalisee = adresse_normalisee;
		this.info = info;
		this.adressegeographique = adressegeographique;
		this.localisationgeographique = localisationgeographique;
		this.economies = economies;
	}
}