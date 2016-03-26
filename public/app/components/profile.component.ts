import {Component} from 'angular2/core';

import {ProfileService} from '../services/profile.service';

import {Profile} from '../interfaces/profile.interface';

@Component({
    template: `
    	<div *ngIf = "profile" class = "profile">

			<h2>Profile</h2>

			<h3>Username: {{ profile.name }}</h3>

			<h3>Best game:</h3>
			
			<table class="table">
				
				<thead>
					<th> Group Name </th>
					<th> Best Score </th>
				</thead>

				<tbody>
					<tr *ngIf="profile.best_game">
						<td> {{ profile.best_game.groupname }} </td> 
						<td> {{ profile.best_game.score }} </td>
					</tr>
				</tbody>
			</table>

			<h3>Best games:</h3>
			
			<table class="table">
				
				<thead>
					<th> Group Name </th>
					<th> Best Score </th>
				</thead>

				<tbody *ngFor="#game of profile.best_games">
					<tr>
						<td> {{ game.groupname }} </td> 
						<td> {{ game.score }} </td>
					</tr>
				</tbody>
			</table>

		</div>
    `,
    providers: [ProfileService]
})
export class ProfileComponent {

	profile:Profile=null;

	constructor(private _profileService:ProfileService) {}

	ngOnInit():any {
		
		this._profileService.checkUser();

		this._profileService.fetchProfile()
            .subscribe(
				profile => this.profile = profile,
				error => console.log(error),
				() => console.log('Done fetching profile')
            );

	}

}