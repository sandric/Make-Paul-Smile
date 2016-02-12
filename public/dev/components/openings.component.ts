import {Component} from 'angular2/core';

import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {OpeningsService} from '../services/openings.service'

import {Opening} from "../interfaces/opening.interface";


@Component({
    selector: 'openings',
    template: `
    	<div class = "index">
	    	<div class = "groups">
			    <h2>Groups</h2>

		    	<ul>
		    		<li *ngFor="#group of groups" [class.selected]="group == selectedGroup">
		    			<a [routerLink]="['Openings', {group: group}]"> {{ group }} </a> 
		    		</li>
		    	</ul>
	    	</div>
	    
	    	<div class = "openings" *ngIf="selectedGroup">
		    	<h2>{{selectedGroup}} Openings</h2>

		    	<ul>
		    		<li *ngFor="#opening of openings">{{ opening.name }}</li>
		    	</ul>
	    	</div>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES],
    inputs: ['selectedGroup']
})
export class OpeningsComponent { 

	selectedGroup:string;

	groups:string[];

	openings:Opening[];


	filterOpeningsBySelectedGroup(openings:Opening[]) {
		this.openings = openings.filter(opening => opening.group == this.selectedGroup);
	}


	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}

	ngOnInit():any {

		this.groups = this._openingsService.getGroups();

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