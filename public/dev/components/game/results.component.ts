import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {OpeningsComponent} from './openings.component'


import {gameResults} from '../../interfaces/gameResults.interface';



@Component({
    selector: 'results',
    template: `
    	<div class="index">
    		<openings [group]></openings>
    	</div>

		<div class="main">
			<h2>{{ gameResults.group }} game results:</h2>

			<div class="results">
				<div>
					<label>Total Score:</label>
					<label>{{ gameResults.score }}</label>
				</div>
				<div>
					<label>Previous Score:</label>
					<label>{{ gameResults.previous_score }}</label>
				</div>
			</div>
		</div>
    `,
    directives: [OpeningsComponent]
})
export class ResultsComponent {

	group:string;

	gameResults:gameResults;

	constructor(private _router:Router, private _routeParams: RouteParams) {}

	ngOnInit():any {

		this.group = this._routeParams.get('group');

		this.gameResults = <gameResults> {
			group: this.group,
			score: 77,
			previous_score: 88
		}
	}
}