import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import 'rxjs/Rx';

import {Profile} from "../interfaces/profile.interface";



@Injectable()
export class ProfileService {

	constructor(private _http: Http) {}

	fetchProfile() {
		return this._http.get('/api/users/7')
			.map(response => <Profile> response.json());
	}
}