import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { SingleEntrepriseComponent } from './entreprise-list/single-entreprise/single-entreprise.component';
import { EntrepriseFormComponent } from './entreprise-list/entreprise-form/entreprise-form.component';
import { IdentificationEntrepriseComponent } from './entreprise-list/single-entreprise/identification-entreprise/identification-entreprise.component';
import { CaracteristiquesEconomiquesEntrepriseComponent } from './entreprise-list/single-entreprise/caracteristiques-economiques-entreprise/caracteristiques-economiques-entreprise.component';
import { InformationsSiegeComponent } from './entreprise-list/single-entreprise/informations-siege/informations-siege.component';
import { EtablissementListComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-list.component';
import { SingleEtablissementComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/single-etablissement.component';
import { EtablissementFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/etablissement-form.component';
import { AdresseDeclareeFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/adresse-declaree-form/adresse-declaree-form.component';
import { AdresseNormaliseeFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/adresse-normalisee-form/adresse-normalisee-form.component';
import { InformationsEtablissementFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/informations-etablissement-form/informations-etablissement-form.component';
import { AdresseGeographiqueFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/adresse-geographique-form/adresse-geographique-form.component';
import { LocalisationGeographiqueFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/localisation-geographique-form/localisation-geographique-form.component';
import { CaracteristiquesEconomiquesEtablissementFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/caracteristiques-economiques-etablissement-form/caracteristiques-economiques-etablissement-form.component';
import { AdresseDeclareeComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/adresse-declaree/adresse-declaree.component';
import { AdresseNormaliseeComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/adresse-normalisee/adresse-normalisee.component';
import { InformationsEtablissementComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/informations-etablissement/informations-etablissement.component';
import { AdresseGeographiqueComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/adresse-geographique/adresse-geographique.component';
import { LocalisationGeographiqueComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/localisation-geographique/localisation-geographique.component';
import { CaracteristiquesEconomiquesEtablissementComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/caracteristiques-economiques-etablissement/caracteristiques-economiques-etablissement.component';
import { IdentificationEntrepriseFormComponent } from './entreprise-list/entreprise-form/identification-entreprise-form/identification-entreprise-form.component';
import { CaracteristiquesEconomiquesEntrepriseFormComponent } from './entreprise-list/entreprise-form/caracteristiques-economiques-entreprise-form/caracteristiques-economiques-entreprise-form.component';
import { InformationsSiegeFormComponent } from './entreprise-list/entreprise-form/informations-siege-form/informations-siege-form.component';


const appRoutes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'entreprises', component: EntrepriseListComponent },
  { path: 'entreprises/new', component: EntrepriseFormComponent },
  { path: 'entreprises/view/:id', component: SingleEntrepriseComponent },
  { path: 'entreprises/edit/:id', component: EntrepriseFormComponent },
  { path: 'entreprises/:id/etablissements', component: EntrepriseListComponent },
  { path: 'entreprises/:id/etablissements/new', component: EntrepriseFormComponent },
  { path: 'entreprises/:id/etablissements/view/:id', component: SingleEntrepriseComponent },
  { path: 'entreprises/:id/etablissements/edit/:id', component: EntrepriseFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    EntrepriseListComponent,
    SingleEntrepriseComponent,
    EntrepriseFormComponent,
    IdentificationEntrepriseComponent,
    CaracteristiquesEconomiquesEntrepriseComponent,
    InformationsSiegeComponent,
    IdentificationEntrepriseFormComponent,
    CaracteristiquesEconomiquesEntrepriseFormComponent,
    InformationsSiegeFormComponent,
    EtablissementListComponent,
    SingleEtablissementComponent,
    EtablissementFormComponent,
    AdresseDeclareeFormComponent,
    AdresseNormaliseeFormComponent,
    InformationsEtablissementFormComponent,
    AdresseGeographiqueFormComponent,
    LocalisationGeographiqueFormComponent,
    CaracteristiquesEconomiquesEtablissementFormComponent,
    AdresseDeclareeComponent,
    AdresseNormaliseeComponent,
    InformationsEtablissementComponent,
    AdresseGeographiqueComponent,
    LocalisationGeographiqueComponent,
    CaracteristiquesEconomiquesEtablissementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
