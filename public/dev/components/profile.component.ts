import {Component} from 'angular2/core';

import {Profile} from '../interfaces/profile.interface';

@Component({
    template: `
		<h2>Profile</h2>

		<div>
			<label>Username:</label>
			<label>{{ profile.name }}</label>
		</div>
		<div>
			<label>Best game:</label>
			<div>
				<label>{{ profile.best_game.group }}</label>
				<label>{{ profile.best_game.score }}</label>
			</div>
		</div>

		<div>
			<label>Best games by group:</label>
			<div *ngFor="#game of profile.best_games_by_group">
				<label>{{ game.group }}</label>
				<label>{{ game.score }}</label>
			</div>
		</div>
    `
})
export class ProfileComponent {

	profile:Profile;

	ngOnInit():any {

		this.profile = <Profile> {
			name: "Soso",
			best_game: {
				group: "Open",
				score: 11
			},
			best_games_by_group: [
				{
					group: "Semi-open",
					score: 22
				},
				{
					group: "Semi-open",
					score: 33
				},
				{
					group: "Semi-open",
					score: 44
				},
				{
					group: "Semi-open",
					score: 55
				},
				{
					group: "Semi-open",
					score: 66
				},
			]
		}
	}

}