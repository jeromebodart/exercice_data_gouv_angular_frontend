export class InformationsEtablissement {
	id: number;
	enseigne: string;
	ind_publipo: number;
	siege: number;
	statut_diffusion: number;
	date_diffusion_base: string;
	constructor(id: number,
	enseigne: string,
	ind_publipo: number,
	siege: number,
	statut_diffusion: number,
	date_diffusion_base: string) {
		this.id = id;
		this.enseigne = enseigne;
		this.ind_publipo = ind_publipo;
		this.siege = siege;
		this.statut_diffusion = statut_diffusion;
		this.date_diffusion_base = date_diffusion_base;
	}
}