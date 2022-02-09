import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }


  getImagPng(data: any[]): Observable<any> {


    let params = {

    };

    Object.assign(params, {
      data1: data
    })

    return this.http.get<any>(
      `${environment.urlAddress}imagPng`,
      {
        params
      });
  }


  getErrorMedio(data: any[]): Observable<any> {


    let params = {

    };

    Object.assign(params, {
      data1: data
    })

    return this.http.get<any>(
      `${environment.urlAddress}errorMedio`,
      {
        params
      });
  }

}
