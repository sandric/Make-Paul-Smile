import {Component} from 'angular2/core';

import {Profile} from '../interfaces/profile.interface';

import {ProfileService} from '../services/profile.service';


@Component({
	selector: 'auth',
    template: `
    	<h2>Introduce yourself, seeker.</h2>

		<div class="signup center-block">
			<h1>Signup</h1>
			<form role="form">
				<pre class="error">{{error}}</pre>
				<div class="form-group">
		    		<label for="username">Username</label>
		    		<input type="text" #username (keyup)="0" class="form-control" id="username" placeholder="Username">
		  		</div>
		  		<div class="form-group">
		    		<label for="password">Password</label>
		    		<input type="password" #password (keyup)="0" class="form-control" id="password" placeholder="Password">
		  		</div>
		  		<button (click)="signIn(username.value, password.value)" type="submit" class="btn btn-default">Sign In</button>
		  		<button (click)="signUp(username.value, password.value)" type="submit" class="btn btn-default">Sign Up</button>
			</form>
		</div>
    `,
    providers: [ProfileService]
})
export class AuthComponent {

	error: string;

	constructor(private _profileService: ProfileService) { }

	signIn(username, password) {

		this._profileService.signIn(
			username,
			password
		).catch((error) => {
			this.error = error;
		});
	}

	signUp(username, password) {

		this._profileService.signUp(
			username,
			password
		).catch((error) => {
			this.error = error;
		});
	}

}