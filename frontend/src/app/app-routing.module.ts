import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPasteComponent } from './add-paste/add-paste.component'
import { AppComponent } from './app.component'
import { PasteComponent } from './paste/paste.component'
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: '', component: AddPasteComponent },
  { path: 'paste/:hash', component: PasteComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule
  ],
  bootstrap: [AppComponent]
})
export class AppRoutingModule { }
