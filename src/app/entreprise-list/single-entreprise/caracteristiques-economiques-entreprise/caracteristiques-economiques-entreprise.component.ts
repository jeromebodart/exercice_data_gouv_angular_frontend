import { Component, OnInit, Input } from '@angular/core';
import { CaracteristiquesEconomiques } from 'src/app/models/caracteristiques-economiques-entreprise/caracteristiques-economiques.model';

@Component({
  selector: 'app-caracteristiques-economiques-entreprise',
  templateUrl: './caracteristiques-economiques-entreprise.component.html',
  styleUrls: ['./caracteristiques-economiques-entreprise.component.scss']
})
export class CaracteristiquesEconomiquesEntrepriseComponent implements OnInit {
  @Input() caracteristiques_economiques: CaracteristiquesEconomiques;
  constructor() { }

  ngOnInit() {
  }

}
