import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddPasteComponent } from './add-paste/add-paste.component';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule, } from '@angular/material/datepicker';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, DateAdapter } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import * as _moment from 'moment';
import { MomentDateAdapter, MatMomentDateModule } from '@angular/material-moment-adapter';
import { PasteComponent } from './paste/paste.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NotFoundComponent } from './not-found/not-found.component'
import {NgxCopyPasteModule} from 'ngx-copypaste'

const moment = _moment;

export const DATE_FORMATS = {
  parse: {
    dateInput: 'LL',
    locale: 'en-GB'
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',

  },
  week: {
    dow: 1
  }
};

@NgModule({
  declarations: [
    AppComponent,
    AddPasteComponent,
    PasteComponent,
    NotFoundComponent,
  ],
  imports: [
    AppRoutingModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatMomentDateModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule,
    NgxCopyPasteModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
    { provide: MAT_DATE_FORMATS, useValue: DATE_FORMATS },
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
