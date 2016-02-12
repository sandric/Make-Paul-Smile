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
		    		<li *ngFor="#_group of groups" [class.selected]="_group == group">
		    			<a [routerLink]="['Openings', {group: _group}]"> {{ _group }} </a> 
		    		</li>
		    	</ul>
	    	</div>
	    
	    	<div class = "openings" *ngIf="group">
		    	<h2>{{group}} Openings</h2>

		    	<ul>
		    		<li *ngFor="#opening of openings">
		    			<a [routerLink]="['Learning', {opening: opening.name}]"> {{ opening.name }} </a>
		    		</li>
		    	</ul>
	    	</div>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES],
    inputs: ['group']
})
export class OpeningsComponent { 

	group:string;

	groups:string[];

	openings:Opening[];


	filterOpeningsBySelectedGroup(openings:Opening[]) {
		this.openings = openings.filter(opening => opening.group == this.group);
	}


	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}

	ngOnInit():any {

		this.groups = this._openingsService.getGroups();

		this.group = this._routeParams.get('group');

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