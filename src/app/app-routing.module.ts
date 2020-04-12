import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNewCasesComponent } from './components/page-new-cases/page-new-cases.component';
import { PageCasesInProcessComponent } from './components/page-cases-in-process/page-cases-in-process.component';
import { PageCaseSingleComponent } from './components/page-case-single/page-case-single.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', component: PageNewCasesComponent },
  { path: 'in-process', component: PageCasesInProcessComponent },
  { path: 'case-single/:id', component: PageCaseSingleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
