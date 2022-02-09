import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getImagPng(data1: string,dataex:string,name:string): Observable<any> {


    let params = {
      data1,
      dataex,
      name
    };


    return this.http.get<any>(
      `${environment.urlAddress}imagPng`,
      {
        params
      });
  }


  getErrorMedio(data1: string,dataex:string): Observable<any> {


    let params = {
      data1,
      dataex
    };

    return this.http.get<any>(
      `${environment.urlAddress}errorMedio`,
      {
        params
      });
  }

}
