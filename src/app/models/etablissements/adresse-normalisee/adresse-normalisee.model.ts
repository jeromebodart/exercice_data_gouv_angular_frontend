export class AdresseNormalisee {
	id: number;
	l1_normalisee: string;
	l2_normalisee: string;
	l3_normalisee: string;
	l4_normalisee: string;
	l5_normalisee: string;
	l6_normalisee: string;
	l7_normalisee: string;
	constructor(id: number,
		l1_normalisee: string,
		l2_normalisee: string,
		l3_normalisee: string,
		l4_normalisee: string,
		l5_normalisee: string,
		l6_normalisee: string,
		l7_normalisee: string) {
			this.id = id;
			this.l1_normalisee = l1_normalisee;
			this.l2_normalisee = l2_normalisee;
			this.l3_normalisee = l3_normalisee;
			this.l4_normalisee = l4_normalisee;
			this.l5_normalisee = l5_normalisee;
			this.l6_normalisee = l6_normalisee;
			this.l7_normalisee = l7_normalisee;
		}
}