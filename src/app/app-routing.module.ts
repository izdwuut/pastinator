import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddPasteComponent } from './add-paste/add-paste.component'
import { AppComponent } from './app.component'

const routes: Routes = [
  { path: '', component: AddPasteComponent }
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
