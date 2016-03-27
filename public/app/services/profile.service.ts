import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";

import {RouteParams, Router} from 'angular2/router';


import 'rxjs/Rx';

import {Profile} from "../interfaces/profile.interface";



@Injectable()
export class ProfileService {

	userID: number;
	userName: string;

	constructor(private _router: Router, private _http: Http) { }

	storeUser() {

  		localStorage.setItem('userid', this.userID);
  		localStorage.setItem('username', this.userName);
	}

	restoreUser() {

  		this.userID = localStorage.getItem('userid');
  		this.userName = localStorage.getItem('username');
	}


	isUserLogged() {

		console.log("CHECKING uuu");

		this.restoreUser();

		if (this.userID)
			return true;
		else
			return false;
	}

	checkUser() {

		if (!this.isUserLogged()) {
			this._router.navigate(['Home']);
		}
	}


	deleteUser() {

		localStorage.clear();
	}



	fetchProfile() {
		
		this.restoreUser();
		
		return this._http.get(`/api/users/${this.userID}`)
			.map(response => <Profile> response.json());
	}

	signOut() {

		this.deleteUser();

		this._router.navigate(['Home']);
	}

	signIn(username, password) {

		let body = JSON.stringify({ username, password });

		let contentHeaders = new Headers();
		
		contentHeaders.append('Accept', 'application/json');
		contentHeaders.append('Content-Type', 'application/json');

		this._http.post('http://localhost:8080/api/sessions', body, { headers: contentHeaders })
	    	.subscribe(
	        	response => {
	          		
	          		this.userID = response.json().id;
	          		this.userName = response.json().name;

	          		this.storeUser();

	          		this._router.navigate(['Profile']);
	        	},
	        	error => {
	          		console.log(error.text);
	        	}
	      	);
	}

	signUp(username, password) {

		let body = JSON.stringify({ username, password });

		let contentHeaders = new Headers();
		
		contentHeaders.append('Accept', 'application/json');
		contentHeaders.append('Content-Type', 'application/json');

		this._http.post('http://localhost:8080/api/users', body, { headers: contentHeaders })
	    	.subscribe(
	        	response => {
	          		
	          		this.userID = response.json().id;
	          		this.userName = response.json().name;

	          		this.storeUser();

	          		this._router.navigate(['Profile']);
	        	},
	        	error => {
	          		console.log(error.text);
	        	}
	      	);
	}
}