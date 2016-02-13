import {Component} from 'angular2/core';

import {TopGame} from '../interfaces/topGame.interface';

@Component({
    template: `
    	<h1>DA TOP:</h1>
	    <div *ngFor="#game of topGames">
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
    `
})
export class TopComponent {

	topGames:TopGame[];

	ngOnInit():any {

		this.topGames = <TopGame[]>[
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
		];
	}
}