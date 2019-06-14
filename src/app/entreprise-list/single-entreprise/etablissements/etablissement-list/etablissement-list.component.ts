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
  @Input() id_entreprise: number;
  @Input() etablissements: Etablissement[];

  constructor(private router: Router) {
    
  }
  ngOnInit() {

  }
  onViewEtablissement(id: number) {
    this.router.navigate(['\entreprises',this.id_entreprise,'etablissements','view', id])
  }
}


