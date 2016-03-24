import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

import 'rxjs/Rx';

import {Opening} from "../interfaces/opening.interface";



@Injectable()
export class OpeningsService {

	openings:Opening[] = null;

	constructor(private _http: Http) {}

	getGroupNames() {
		return ["Open", "Semi-open", "Closed", "Semi-closed", "Indian-defence", "Flank"];
	}

	fetchOpenings() {
		return this._http.get('/api/openings')
			.map(response => <Opening[]> response.json())
			.do(openings => this.openings = openings);
	}
}