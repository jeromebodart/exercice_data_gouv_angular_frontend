export class CaracteristiquesEconomiques {
	id: number;
	nature_juridique: string;
	lib_nature_juridique: string;
	activite_principale: string;
	lib_activite_principale: string;
	annee_validite_activite_principale: string;
	activite_principale_registre_metier: string;

	constructor(id: number,
		nature_juridique: string,
		lib_nature_juridique: string,
		activite_principale: string,
		lib_activite_principale: string,
		annee_validite_activite_principale: string,
		activite_principale_registre_metier: string) 
		{ 
			this.id = id;
			this.nature_juridique = nature_juridique;
			this.lib_nature_juridique = lib_nature_juridique;
			this.activite_principale = activite_principale;
			this.lib_activite_principale = lib_activite_principale;
			this.annee_validite_activite_principale = annee_validite_activite_principale;
			this.activite_principale_registre_metier = activite_principale_registre_metier;
		}
}