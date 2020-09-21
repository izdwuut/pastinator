import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import {environment} from '../../environments/environment'
import {Paste} from '../entities/paste'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class RestService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  apiUrl = environment.apiUrl
  constructor(private http: HttpClient) { }

  addPaste(paste: Paste): Observable<Paste> {
    return this.http.post<Paste>(this.apiUrl + 'paste', paste).pipe()
  }

  getPaste(hash: String): Observable<Paste> {
    return this.http.get<Paste>(this.apiUrl + 'paste/' + hash).pipe()
  }
}
