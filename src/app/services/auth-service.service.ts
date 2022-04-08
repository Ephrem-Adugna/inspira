import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class AuthServiceService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  register(user): Observable<any> {
    return this.http.post(this.apiUrl + "register", user);
  }
  login(user): Observable<any> {
    return this.http.post(this.apiUrl + "login", user);
  }
}
