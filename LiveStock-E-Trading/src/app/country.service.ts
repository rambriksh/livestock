import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private baseUrl = 'http://localhost:8111/countries/country';
 
  constructor(private http: HttpClient) { }
 getAllCountry():Observable<any>
 {
  return this.http.get(`${this.baseUrl}`);
 }

  
}
