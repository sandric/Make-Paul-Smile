import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

import {ProfileService} from '../../services/profile.service';


import {OpeningsComponent} from './openings.component'


import {ResultsService} from '../../services/results.service';


import {Results} from '../../interfaces/results.interface';



@Component({
    selector: 'results',
    template: `
    	<div class="index">
    		<openings [groupname]></openings>
    	</div>

		<div *ngIf = "results" class="main">
			<h2>{{ results.groupname }} game results:</h2>

			<div class="results">
				<div>
					<label>Game score:</label>
					<label>{{ results.score }}</label>
				</div>
				<div>
					<label>Best game score:</label>
					<label>{{ results.best_score }}</label>
				</div>
			</div>
		</div>
    `,
    providers: [ResultsService],
    directives: [OpeningsComponent]
})
export class ResultsComponent {

	groupname:string;

	results:Results;

	constructor(private _router: Router, private _routeParams: RouteParams, private _resultsService: ResultsService) { }

	ngOnInit():any {

		this.groupname = this._routeParams.get('groupname');

		this._resultsService.fetchResults()
                .subscribe(
                    results => this.results = results,
                    error => console.log(error),
                    () => console.log('Done fetching openings')
                );
	}
}