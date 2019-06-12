export class CaracteristiquesEconomiques {
	id: number;
	nature: string;
	lib_nature: string;
	activite_principale: string;
	lib_activite_principale: string;
	constructor(id: number,
	nature: string,
	lib_nature: string,
	activite_principale: string,
	lib_activite_principale: string) {
		this.id = id;
		this.nature = nature;
		this.lib_nature = lib_nature;
		this.activite_principale = activite_principale;
		this.lib_activite_principale = lib_activite_principale;
	}
}