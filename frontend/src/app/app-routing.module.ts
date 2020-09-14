import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPasteComponent } from './add-paste/add-paste.component';

const routes: Routes = [
  {path: '', component: AddPasteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
