import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import 'rxjs/Rx';

import {Results} from "../interfaces/results.interface";



@Injectable()
export class ResultsService {

	constructor(private _http: Http) {}

	fetchResults(gameId) {
		return this._http.get('/api/games/' + gameId)
			.map(response => <Results> response.json());
	}
}