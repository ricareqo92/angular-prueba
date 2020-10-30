import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { global } from '../global';
import { Observable } from 'rxjs';

//Interfaces

export interface Role {
  id: number,
  name: string,
  description: string,
}

@Injectable({
  providedIn: 'root'
})
export class RolesService {

  public url: string;

  constructor(private http: HttpClient) {
    this.url = global.url + 'roles/';  
  }

  public createRole(role: Role): Observable<any> {
    return this.http.post(this.url, role);
  }

  public getRole(id: number): Observable<any> {
    return this.http.get(this.url + id);
  }

  public getRoles(): Observable<any> {
    return this.http.get(this.url);
  }

  public editRole(role: Role, id: number): Observable<any> {
    return this.http.put(this.url + id, role);
  }

  public deleteRole(id: number): Observable<any> {
    return this.http.delete(this.url + id);
  }

}
