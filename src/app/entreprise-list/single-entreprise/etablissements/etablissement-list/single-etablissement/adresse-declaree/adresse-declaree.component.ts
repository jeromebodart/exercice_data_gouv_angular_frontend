import { Component, OnInit, Input } from '@angular/core';
import { AdresseDeclaree } from 'src/app/models/etablissements/adresse-declaree/adresse-declaree.model';

@Component({
  selector: 'app-adresse-declaree',
  templateUrl: './adresse-declaree.component.html',
  styleUrls: ['./adresse-declaree.component.scss']
})
export class AdresseDeclareeComponent implements OnInit {

  @Input() l1Declaree: string;
  constructor() { }

  ngOnInit() {
  }

}
