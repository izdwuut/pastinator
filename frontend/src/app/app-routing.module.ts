import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPasteComponent } from './add-paste/add-paste.component';
import { PasteComponent } from './paste/paste.component';

const routes: Routes = [
  {path: '', component: AddPasteComponent},
  {path:'paste/:hash', component: PasteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
