import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseFormComponent } from './entreprise-list/entreprise-form/entreprise-form.component';
import { SingleEntrepriseComponent } from './entreprise-list/single-entreprise/single-entreprise.component';
import { EtablissementListComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-list.component';
import { EtablissementFormComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/etablissement-form/etablissement-form.component';
import { SingleEtablissementComponent } from './entreprise-list/single-entreprise/etablissements/etablissement-list/single-etablissement/single-etablissement.component';

const routes: Routes = [
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'entreprises', component: EntrepriseListComponent },
  { path: 'entreprises/new', component: EntrepriseFormComponent },
  { path: 'entreprises/view/:id', component: SingleEntrepriseComponent },
  { path: 'entreprises/edit/:id', component: EntrepriseFormComponent },
  { path: 'entreprises/:id/etablissements', component: EtablissementListComponent },
  { path: 'entreprises/:id/etablissements/new', component: EtablissementFormComponent },
  { path: 'entreprises/:id/etablissements/view/:id', component: SingleEtablissementComponent },
  { path: 'entreprises/:id/etablissements/edit/:id', component: EtablissementFormComponent },
  { path: '', redirectTo: 'entreprises', pathMatch: 'full' },
  { path: '**', redirectTo: 'entreprises' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
