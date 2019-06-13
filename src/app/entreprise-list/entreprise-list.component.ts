import { Component, OnInit, OnDestroy } from '@angular/core';
import { Entreprise } from '../models/entreprise.model';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { EntreprisesService } from '../services/entreprises.service';

@Component({
  selector: 'app-entreprise-list',
  templateUrl: './entreprise-list.component.html',
  styleUrls: ['./entreprise-list.component.scss']
})
export class EntrepriseListComponent implements OnInit, OnDestroy {

  entrepriselists: Entreprise[];
  entrepriseSubscription: Subscription;

  constructor(
    private entrepriseService: EntreprisesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.entrepriseSubscription = this.entrepriseService.entreprisesSubject.subscribe(
      (entreprises: Entreprise[]) => {
        this.entrepriselists = entreprises;
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

  onGetAllEntreprises() {
    this.entrepriseService.getAllEntreprises();
  }

}
