import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesListComponent } from './modules/cases/components/cases-list/cases-list.component';
import { CaseSingleComponent } from './modules/cases/pages/case-single/case-single.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';
import { NewCasesComponent } from './modules/cases/pages/new-cases/new-cases.component';
import { FinishedCasesComponent } from './modules/cases/pages/finished-cases/finished-cases.component';

const routes: Routes = [
  { path: 'cases/all', component: CasesListComponent },
  { path: '', redirectTo: 'cases/all', pathMatch: 'full' },
  { path: 'cases/new', component: NewCasesComponent },
  { path: 'cases/finished', component: FinishedCasesComponent },
  { path: 'cases/:id', component: CaseSingleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
