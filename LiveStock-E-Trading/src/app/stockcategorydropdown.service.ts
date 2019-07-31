import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
    providedIn: 'root'
  })

  export class stockcategorydropdownservice
    {
        private baseUrl = 'http://localhost:8111/category/stock';

        constructor(private http: HttpClient) { }
         getAllCategory(): Observable<any>
            {
            return this.http.get(`${this.baseUrl}`);
            }

    }