import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissements/etablissement.model';
import { Entreprise } from 'src/app/models/entreprise.model';
import { AdresseDeclaree } from 'src/app/models/etablissements/adresse-declaree/adresse-declaree.model';
import { AdresseNormalisee } from 'src/app/models/etablissements/adresse-normalisee/adresse-normalisee.model';
import { InformationsEtablissement } from 'src/app/models/etablissements/informations-etablissement/informations-etablissement.model';
import { AdresseGeographique } from 'src/app/models/etablissements/adresse-geographique/adresse-geographique.model';
import { LocalisationGeographique } from 'src/app/models/etablissements/localisation-geographique/localisation-geographique.model';
import { CaracteristiquesEconomiques } from 'src/app/models/etablissements/caracteristiques-economiques/caracteristiques-economiques-etablissement.model';
import { Subscription } from 'rxjs';
import { EtablissementsService } from 'src/app/services/etablissements.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-etablissement',
  templateUrl: './single-etablissement.component.html',
  styleUrls: ['./single-etablissement.component.scss']
})
export class SingleEtablissementComponent implements OnInit {
  etablissement: Etablissement[];
  etablissementSubscription: Subscription;
  constructor(
    private etablissementsService: EtablissementsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
   }

  ngOnInit() {
    var id_etablissement = parseInt(this.route.snapshot.params['id']);
    this.etablissementSubscription = this.etablissementsService.etablissementsSubject.subscribe(
      (tab: Etablissement[]) => {
        this.etablissement = tab;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    this.etablissementsService.getByIdEtablissement(id_etablissement);
    console.log(this.etablissement);
    //this.etablissementsService.emitEtablissementsSubject();
  }

  ngOnDestroy() {
    this.etablissementSubscription.unsubscribe();
  }

}
