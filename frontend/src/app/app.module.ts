import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPasteComponent } from './add-paste/add-paste.component';
import {RestService} from './services/rest.service'
import { HttpClientModule } from '@angular/common/http';
import {MatDatepickerModule} from '@angular/material/datepicker'
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatMomentDateModule,MomentDateAdapter } from '@angular/material-moment-adapter'
import * as _moment from 'moment'
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { PasteComponent } from './paste/paste.component';
const moment = _moment

export const DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
    locale: 'en-GB'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY'
  },
  week: {
    dow: 1
  }
}
@NgModule({
  declarations: [
    AppComponent,
    AddPasteComponent,
    PasteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatDatepickerModule,
    MatIconModule,
    FormsModule,
    MatMomentDateModule,
    MatSnackBarModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    RestService,
    {provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE]},
    {provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS},
    {provide: MAT_DATE_LOCALE, useValue: DATE_FORMATS.parse.locale}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
