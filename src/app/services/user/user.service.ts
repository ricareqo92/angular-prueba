import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { global } from '../global';

@Injectable({
  	providedIn: 'root'
})
export class UserService {

	public url: any;

	constructor(
		public http: HttpClient,
	) {
		this.url = global.url + 'users';
	}

	public createUser(user): Observable<any> {
		return this.http.post(this.url, user);
	}

	public editUser(user, id): Observable<any> {
		return this.http.put(this.url+ '/' + id, user);
	}

	public getUsers(): Observable<any> {
		return this.http.get(this.url);
	}

	public getUser(id: number): Observable<any> {
		return this.http.get(this.url + '/' + id);
	}

	public deleteUser(id: number): Observable<any> {
		return this.http.delete(this.url + '/' + id);
	}
}
