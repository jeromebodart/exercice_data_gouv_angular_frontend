import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissements/etablissement.model';
import { InformationsSiege } from 'src/app/models/informations-siege/informations-siege.model';
import { IdentificationEntreprise } from 'src/app/models/identification-entreprise/identification-entreprise.model';
import { CaracteristiquesEconomiques } from 'src/app/models/etablissements/caracteristiques-economiques/caracteristiques-economiques-etablissement.model';
import { Subscription } from 'rxjs';
import { Entreprise } from 'src/app/models/entreprise.model';
import { EntreprisesService } from 'src/app/services/entreprises.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-single-entreprise',
  templateUrl: './single-entreprise.component.html',
  styleUrls: ['./single-entreprise.component.scss']
})
export class SingleEntrepriseComponent implements OnInit {
  @Input() id: number;
  @Input() siren: number;
	@Input() etablissements: Etablissement[];
	@Input() siege: InformationsSiege;
	@Input() identification_entreprise: IdentificationEntreprise;
	@Input() caracteristiques_economiques: CaracteristiquesEconomiques;

  entreprise: Entreprise;
  entrepriseSubscription: Subscription;

  constructor(
    private entrepriseService: EntreprisesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.entrepriseSubscription = this.entrepriseService.entreprisesSubject.subscribe(
      (entreprises: Entreprise[]) => {
        this.entreprise = entreprises[0];
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
    this.entrepriseService.emitEntrepriseSubject();
  }

  ngOnDestroy() {
    this.entrepriseSubscription.unsubscribe();
  }

  onGetByIdEntreprises() {
    this.entrepriseService.getAllEntreprises();
  }

}
