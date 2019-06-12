export class InformationsSiege {
	id: number;
	nic: string;
	code_region: string;
	departement_commune: string;
	email: string;

	constructor(id: number,
		nic: string,
		code_region: string,
		departement_commune: string,
		email: string) 
		{ 
			this.id = id;
			this.nic = nic;
			this.code_region = code_region;
			this.departement_commune = departement_commune;
			this.email = email;
		}
}