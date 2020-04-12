import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CasesListComponent } from './components/cases-list/cases-list.component';
import { MatButtonModule } from '@angular/material/button';
import { CasesNavComponent } from './components/cases-nav/cases-nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PageNewCasesComponent } from './components/page-new-cases/page-new-cases.component';
import { PageCasesInProcessComponent } from './components/page-cases-in-process/page-cases-in-process.component';
import { PageCaseSingleComponent } from './components/page-case-single/page-case-single.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    CasesListComponent,
    CasesNavComponent,
    PageNotFoundComponent,
    PageNewCasesComponent,
    PageCasesInProcessComponent,
    PageCaseSingleComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
