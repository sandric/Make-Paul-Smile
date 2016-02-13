import {Component} from 'angular2/core';

import {ProfileService} from '../services/profile.service';

import {Profile} from '../interfaces/profile.interface';

@Component({
    template: `
    	<div *ngIf = "profile" class = "profile">
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
		</div>
    `,
    providers: [ProfileService]
})
export class ProfileComponent {

	profile:Profile=null;

	constructor(private _profileService:ProfileService) {}

	ngOnInit():any {
		console.log('wut');
		this._profileService.fetchProfile()
                .subscribe(
                    profile => this.profile = profile,
                    error => console.log(error),
                    () => console.log('Done fetching profile')
                );

        /*
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
		}*/
	}

}