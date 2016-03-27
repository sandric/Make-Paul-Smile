import {Component} from 'angular2/core';

import {ProfileService} from '../services/profile.service';


import {TopService} from '../services/top.service';

import {Top} from '../interfaces/top.interface';

@Component({
    template: `
    	<h1>Top Games:</h1>

		<table class="table">
			
			<thead>
				<th> Group Name </th>
				<th> Best Score </th>
				<th> Username </th>
			</thead>

			<tbody *ngFor="#game of top">
				<tr>
					<td> {{ game.groupname }} </td> 
					<td> {{ game.score }} </td>
					<td> {{ game.username }} </td>
				</tr>
			</tbody>
		</table>
    `,
    providers: [TopService]
})
export class TopComponent {

	top:Top[];

	constructor(private _profileService: ProfileService, private _topService:TopService) { }


	ngOnInit():any {

		this._profileService.checkUser();

		this._topService.fetchTopGames()
                .subscribe(
                    top => this.top = top,
                    error => console.log(error),
                    () => console.log('Done fetching top games')
                );
	}
}