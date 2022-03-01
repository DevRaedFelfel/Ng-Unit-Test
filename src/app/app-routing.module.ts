import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QoutesComponent } from './qoutes/components/qoutes/qoutes.component';

const routes: Routes = [
  {
    path: "",
    component: QoutesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
