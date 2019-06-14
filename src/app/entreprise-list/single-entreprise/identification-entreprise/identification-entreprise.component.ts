import { Component, OnInit, Input } from '@angular/core';
import { IdentificationEntreprise } from 'src/app/models/identification-entreprise/identification-entreprise.model';

@Component({
  selector: 'app-identification-entreprise',
  templateUrl: './identification-entreprise.component.html',
  styleUrls: ['./identification-entreprise.component.scss']
})
export class IdentificationEntrepriseComponent implements OnInit {
  @Input() identificationEntreprise: IdentificationEntreprise;
  constructor() { }

  ngOnInit() {
  }

}
