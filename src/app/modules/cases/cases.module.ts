import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CasesListComponent } from './components/cases-list/cases-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CaseSingleComponent } from './pages/case-single/case-single.component';
import { AppRoutingModule } from '../../app-routing.module';
import { AllCasesComponent } from './pages/all-cases/all-cases.component';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { NewCasesComponent } from './pages/new-cases/new-cases.component';
import { FinishedCasesComponent } from './pages/finished-cases/finished-cases.component';

@NgModule({
  declarations: [
    CasesListComponent,
    CaseSingleComponent,
    AllCasesComponent,
    SearchComponent,
    NewCasesComponent,
    FinishedCasesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatRadioModule,
    MatIconModule,
    FormsModule
  ],
  exports: [
    AllCasesComponent
  ]
})
export class CasesModule { }
