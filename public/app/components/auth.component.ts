import {Component} from 'angular2/core';

import {Profile} from '../interfaces/profile.interface';

import {ProfileService} from '../services/profile.service';


@Component({
	selector: 'auth',
    template: `
    	<h2>Introduce yourself, seeker.</h2>

		<div class="signup center-block">
			<h1>Signup</h1>
			<form role="form" (submit)="signup($event, username.value, password.value)">
				<div class="form-group">
		    		<label for="username">Username</label>
		    		<input type="text" #username class="form-control" id="username" placeholder="Username">
		  		</div>
		  		<div class="form-group">
		    		<label for="password">Password</label>
		    		<input type="password" #password class="form-control" id="password" placeholder="Password">
		  		</div>
		  		<button type="submit" class="btn btn-default">Submit</button>
			</form>
		</div>
    `,
    providers: [ProfileService]
})
export class AuthComponent {

	constructor(private _profileService: ProfileService) { }

	signup(event, username, password) {

		this._profileService.signUp(
			username, 
			password
		);
	}

}