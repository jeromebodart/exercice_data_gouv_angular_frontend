import { Component, OnInit, Input } from '@angular/core';
import { Etablissement } from 'src/app/models/etablissements/etablissement.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EtablissementsService } from 'src/app/services/etablissements.service';

@Component({
  selector: 'app-etablissement-list',
  templateUrl: './etablissement-list.component.html',
  styleUrls: ['./etablissement-list.component.scss']
})
export class EtablissementListComponent implements OnInit {


  @Input() etablissements: Etablissement[];
  etablissementSubscription: Subscription;
  
  constructor(
    private etablissementsService: EtablissementsService,
    private router: Router
  ) {

   }

  ngOnInit() {
    this.etablissementSubscription = this.etablissementsService.etablissementsSubject.subscribe(
      (etablissement: Etablissement[]) => {
        this.etablissements = etablissement;
      },
      (error) => {
        console.log('Erreur ! : ' + error);
      }
    );
  }

  ngOnDestroy() {
    this.etablissementSubscription.unsubscribe();
  }

  onGetAllEntreprises() {
    this.etablissementsService.getAllEtablissement();
  }

}


