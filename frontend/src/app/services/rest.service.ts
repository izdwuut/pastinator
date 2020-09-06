import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { HttpClient } from '@angular/common/http';
import { Paste } from '../entities/paste';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient ) { }

  addPaste(paste: Paste): Observable<Paste> {
    return this.http.post<Paste>(this.apiUrl + 'paste/add', paste).pipe()
  }

  getPaste(hash: String): Observable<Paste> {
    return this.http.get<Paste>(this.apiUrl + 'paste/' + hash).pipe()
  }
}
