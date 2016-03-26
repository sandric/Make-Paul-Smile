import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";

import 'rxjs/Rx';

import {Profile} from "../interfaces/profile.interface";



@Injectable()
export class ProfileService {

	userID: number;
	userName: string;

	constructor(private _http: Http) {}

	fetchProfile() {
		return this._http.get('/api/current_user')
			.map(response => <Profile> response.json());
	}

	signUp(username, password) {
		console.log("SIGNING UP!");

		console.log(`username: ${username} password: ${password}`);


		let body = JSON.stringify({ username, password });

		let contentHeaders = new Headers();
		
		contentHeaders.append('Accept', 'application/json');
		contentHeaders.append('Content-Type', 'application/json');


		this._http.post('http://localhost:8080/api/users', body, { headers: contentHeaders })
	    	.subscribe(
	        	response => {
	          		
	          		console.log("response:::");

	          		console.log(response.json());

	          		//localStorage.setItem('jwt', response.json().id_token);
	          		//this.router.parent.navigateByUrl('/home');
	        	},
	        	error => {
	          		console.log(error.text());
	        	}
	      	);
	}
}