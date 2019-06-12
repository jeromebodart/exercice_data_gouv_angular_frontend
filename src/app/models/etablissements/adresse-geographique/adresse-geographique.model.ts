export class AdresseGeographique{
	id: number;
	numvoie: string;
	indrep: string;
	typvoie: string;
	libvoie: string;
	codpos: string;
	cedex: string;
	constructor(id: number,
		numvoie: string,
		indrep: string,
		typvoie: string,
		libvoie: string,
		codpos: string,
		cedex: string) {
			this.id = id;
			this.numvoie = numvoie;
			this.indrep = indrep;
			this.typvoie = typvoie;
			this.libvoie = libvoie;
			this.codpos = codpos;
			this.cedex = cedex;
		}
}