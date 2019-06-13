import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissements/etablissement.model';
import { Entreprise } from 'src/app/models/entreprise.model';
import { AdresseDeclaree } from 'src/app/models/etablissements/adresse-declaree/adresse-declaree.model';
import { AdresseNormalisee } from 'src/app/models/etablissements/adresse-normalisee/adresse-normalisee.model';
import { InformationsEtablissement } from 'src/app/models/etablissements/informations-etablissement/informations-etablissement.model';
import { AdresseGeographique } from 'src/app/models/etablissements/adresse-geographique/adresse-geographique.model';
import { LocalisationGeographique } from 'src/app/models/etablissements/localisation-geographique/localisation-geographique.model';
import { CaracteristiquesEconomiques } from 'src/app/models/etablissements/caracteristiques-economiques/caracteristiques-economiques-etablissement.model';

@Component({
  selector: 'app-single-etablissement',
  templateUrl: './single-etablissement.component.html',
  styleUrls: ['./single-etablissement.component.scss']
})
export class SingleEtablissementComponent implements OnInit {

  @Input() id: number;
  @Input() nic: number;
  @Input() entreprise: Entreprise;
  @Input() adresseDeclaree: AdresseDeclaree;
  @Input() adresseNormalisee: AdresseNormalisee;
  @Input() info: InformationsEtablissement;
  @Input() adresseGeographique: AdresseGeographique;
  @Input() localisationGeographique: LocalisationGeographique;
  @Input() economies: CaracteristiquesEconomiques;

  constructor() { }

  ngOnInit() {
  }

}
