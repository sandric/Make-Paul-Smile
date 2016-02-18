import {Component} from 'angular2/core';

import {TopService} from '../services/top.service';

import {Top} from '../interfaces/top.interface';

@Component({
    template: `
    	<h1>DA TOP:</h1>
	    <div *ngFor="#game of top">
			<div>
				<label>Username:</label>
				<label>{{ game.username }}</label>
			</div>
			<div>
				<label>Group:</label>
				<label>{{ game.group }}</label>
			</div>
			<div>
				<label>Score:</label>
				<label>{{ game.score }}</label>
			</div>
		</div>
    `,
    providers: [TopService]
})
export class TopComponent {

	top:Top[];

	constructor(private _topService:TopService) {}


	ngOnInit():any {

		this._topService.fetchTopGames()
                .subscribe(
                    top => this.top = top,
                    error => console.log(error),
                    () => console.log('Done fetching openings')
                );

        /*

		this.top = <Top[]>[
			{
				group: "Open",
				score: 11,
				username: "soso"
			},
			{
				group: "Open",
				score: 22,
				username: "soso"
			},
			{
				group: "Open",
				score: 33,
				username: "soso"
			},
			{
				group: "Open",
				score: 44,
				username: "soso"
			},
			{
				group: "Open",
				score: 55,
				username: "soso"
			},
		];*/
	}
}