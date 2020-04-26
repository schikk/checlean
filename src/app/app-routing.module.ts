import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CasesListComponent } from './modules/cases/components/cases-list/cases-list.component';
import { CaseSingleComponent } from './modules/cases/pages/case-single/case-single.component';
import { PageNotFoundComponent } from './core/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: CasesListComponent },
  { path: 'case/:id', component: CaseSingleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
