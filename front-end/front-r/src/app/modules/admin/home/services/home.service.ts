import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getImagPng(): Observable<any> {

    return this.http.get<any>(
      `${environment.urlAddress}imagPng`);
  }


  getErrorMedio(): Observable<any> {
    return this.http.get<any>(
      `${environment.urlAddress}errorMedio`);
  }

}
