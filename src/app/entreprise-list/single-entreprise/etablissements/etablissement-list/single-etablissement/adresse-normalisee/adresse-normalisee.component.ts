import { Component, OnInit, Input } from '@angular/core';
import { AdresseNormalisee } from 'src/app/models/etablissements/adresse-normalisee/adresse-normalisee.model';

@Component({
  selector: 'app-adresse-normalisee',
  templateUrl: './adresse-normalisee.component.html',
  styleUrls: ['./adresse-normalisee.component.scss']
})
export class AdresseNormaliseeComponent implements OnInit {
  @Input() adresseNormalisee: AdresseNormalisee;
  constructor() { }

  ngOnInit() {
    
  }

}
