import { Component, OnInit, Input } from '@angular/core';
import { InformationsSiege } from 'src/app/models/informations-siege/informations-siege.model';

@Component({
  selector: 'app-informations-siege',
  templateUrl: './informations-siege.component.html',
  styleUrls: ['./informations-siege.component.scss']
})
export class InformationsSiegeComponent implements OnInit {

  @Input() siege: InformationsSiege;
  constructor() { }

  ngOnInit() {
  }

}
