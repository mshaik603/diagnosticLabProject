import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { LoginComponent } from './login/login.component';
import { ClinicalLabEntryScreenComponent } from './clinical-lab-entry-screen/clinical-lab-entry-screen.component';
import { TestComponent } from './test/test.component';

const routes: Routes = [
  {path:'',component:LoginComponent, pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'clinicalEntry',component:ClinicalLabEntryScreenComponent},
  {path:'test',component:TestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
