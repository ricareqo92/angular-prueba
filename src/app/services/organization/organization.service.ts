import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../global';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  public url: any;

	constructor(
		public http: HttpClient,
	) {
		this.url = global.url + 'organizations';
	}

	public createOrganization(user): Observable<any> {
		return this.http.post(this.url, user);
	}

	public getOrganization(): Observable<any> {
		return this.http.get(this.url);
	}
}
