import {Component} from 'angular2/core';

import {OpeningsService} from '../services/openings.service'

import {Opening} from "../interfaces/opening.interface";

import {RouteParams, Router} from 'angular2/router';


@Component({
    selector: 'openings',
    template: `
    	<h2>{{selectedGroup}} Openings</h2>

    	<ul>
    		<li *ngFor="#opening of openings">{{ opening.name }}</li>
    	</ul>
    `,
    inputs: ['selectedGroup']
})
export class OpeningsComponent { 

	selectedGroup:string;

	openings:Opening[];


	filterOpeningsBySelectedGroup(openings:Opening[]) {
		this.openings = openings.filter(opening => opening.group == this.selectedGroup);
	}


	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}

	ngOnInit():any {

		this.selectedGroup = this._routeParams.get('group');

		if (this._openingsService.openings)
			this.filterOpeningsBySelectedGroup(this._openingsService.openings);
		else 
			this._openingsService.fetchOpenings()
				.subscribe(
					openings => this.filterOpeningsBySelectedGroup(openings),
					error => console.log(error),
					() => console.log('Done fetching openings')
				);
	}
}