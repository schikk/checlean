import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CasesListComponent } from './components/cases-list/cases-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CasesNavComponent } from './components/cases-nav/cases-nav.component';
import { CaseSingleComponent } from './pages/case-single/case-single.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MainCasesComponent } from './pages/main-cases/main-cases.component';
import { FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    CasesListComponent,
    CasesNavComponent,
    CaseSingleComponent,
    MainCasesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  exports: [
    MainCasesComponent
  ]
})
export class CasesModule { }
