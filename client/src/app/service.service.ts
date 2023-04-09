import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  public baseUrl = 'http://localhost:3000/'
  public httpHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  postApi(url: string, data: any) {
    return this.http.post(this.baseUrl + url, data, this.httpHeader)
  }
  getApi(url: string){
    return this.http.get(this.baseUrl + url, this.httpHeader)
  }
}
