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


	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}

	ngOnInit():any {

		console.log("noooooooo");

		this.selectedGroup = this._routeParams.get('group');

		if (this._openingsService.openings)
			this.openings = this._openingsService.openings.filter(opening => opening.group == this.selectedGroup);
		else 
			this._openingsService.fetchOpenings()
				.subscribe(
					openings => this.openings = openings,
					error => console.log(error),
					() => { console.log(this.openings); 
						this.openings = this.openings.filter(opening => opening.group == this.selectedGroup) 
					}
				);
	}
}