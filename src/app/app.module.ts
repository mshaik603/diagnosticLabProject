import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { ClinicalLabEntryScreenComponent } from './clinical-lab-entry-screen/clinical-lab-entry-screen.component';
import { PatientSearchComponent } from './clinical-lab-entry-screen/patient-search/patient-search.component';
import { TestsGridComponent } from './clinical-lab-entry-screen/tests-grid/tests-grid.component';
import { TestComponent } from './test/test.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ClinicalLabEntryScreenComponent,
    PatientSearchComponent,
    TestsGridComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
