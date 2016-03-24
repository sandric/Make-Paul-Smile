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
					<label>{{ profile.best_game.groupname }}</label>
					<label>{{ profile.best_game.score }}</label>
				</div>
			</div>

			<div>
				<label>Best games:</label>
				<div *ngFor="#game of profile.best_games">
					<label>{{ game.groupname }}</label>
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
		this._profileService.fetchProfile()
                .subscribe(
                    profile => this.profile = profile,
                    error => console.log(error),
                    () => console.log('Done fetching profile')
                );
	}

}