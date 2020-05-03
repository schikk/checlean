import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { CasesListComponent } from './components/cases-list/cases-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CaseSingleComponent } from './pages/case-single/case-single.component';
import { AppRoutingModule } from '../../app-routing.module';
import { MainCasesComponent } from './pages/main-cases/main-cases.component';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SearchComponent } from './components/search/search.component';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    CasesListComponent,
    CaseSingleComponent,
    MainCasesComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatInputModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports: [
    MainCasesComponent
  ]
})
export class CasesModule { }
