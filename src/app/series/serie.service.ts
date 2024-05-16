import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { Observable } from 'rxjs';
import { Serie } from './Serie';

@Injectable({
    providedIn: 'root'
  })
export class SerieService {

    private apiUrl = environment.baseUrl + 'series.json';
constructor(private http: HttpClient) { }
getBooks(): Observable<Serie[]> {
    return this.http.get<Serie[]>(this.apiUrl);
  }
}
