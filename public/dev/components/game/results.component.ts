import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {OpeningsComponent} from './openings.component'


import {ResultsService} from '../../services/results.service';


import {Results} from '../../interfaces/results.interface';



@Component({
    selector: 'results',
    template: `
    	<div class="index">
    		<openings [group]></openings>
    	</div>

		<div *ngIf = "results" class="main">
			<h2>{{ results.group }} game results:</h2>

			<div class="results">
				<div>
					<label>Total Score:</label>
					<label>{{ results.score }}</label>
				</div>
				<div>
					<label>Best Score:</label>
					<label>{{ results.best_score }}</label>
				</div>
			</div>
		</div>
    `,
    providers: [ResultsService],
    directives: [OpeningsComponent]
})
export class ResultsComponent {

	group:string;

	results:Results;

	constructor(private _router:Router, private _routeParams: RouteParams, private _resultsService:ResultsService) {}

	ngOnInit():any {

		this.group = this._routeParams.get('group');

		this._resultsService.fetchResults(7, 7)
                .subscribe(
                    results => this.results = results,
                    error => console.log(error),
                    () => console.log('Done fetching openings')
                );

        /*
		this.gameResults = <Results> {
			group: this.group,
			score: 77,
			best_score: 88
		}*/
	}
}