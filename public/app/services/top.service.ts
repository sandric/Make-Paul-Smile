import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import 'rxjs/Rx';

import {Top} from "../interfaces/top.interface";



@Injectable()
export class TopService {

	constructor(private _http: Http) {}

	fetchTopGames() {
		return this._http.get('/api/top')
			.map(response => <Top[]> response.json());
	}
}