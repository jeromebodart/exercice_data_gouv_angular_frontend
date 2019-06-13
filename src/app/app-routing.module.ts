import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EntrepriseListComponent } from './entreprise-list/entreprise-list.component';
import { EntrepriseFormComponent } from './entreprise-list/entreprise-form/entreprise-form.component';
import { SingleEntrepriseComponent } from './entreprise-list/single-entreprise/single-entreprise.component';

const routes: Routes = [
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
  { path: '', redirectTo: 'entreprises', pathMatch: 'full' },
  { path: '**', redirectTo: 'entreprises' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
