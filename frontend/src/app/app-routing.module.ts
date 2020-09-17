import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPasteComponent } from './add-paste/add-paste.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PasteComponent } from './paste/paste.component';

const routes: Routes = [
  {path: '', component: AddPasteComponent},
  {path:'paste/:hash', component: PasteComponent},
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
