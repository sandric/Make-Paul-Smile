import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";

import 'rxjs/Rx';

import {Results} from "../interfaces/results.interface";



@Injectable()
export class ResultsService {

	constructor(private _http: Http) {}

	fetchResults() {

		let userID = localStorage.getItem('userid');

		let groupname = localStorage.getItem('groupname');

		let score = localStorage.getItem('score');


		let body = `{ "user_id": "${userID}", "groupname": "${groupname}", "score": "${score}" }`;

		let contentHeaders = new Headers();

		contentHeaders.append('Accept', 'application/json');
		contentHeaders.append('Content-Type', 'application/json');

		return this._http.post('/api/games/', body, { headers: contentHeaders })
			.map(response => <Results> response.json());
	}
}