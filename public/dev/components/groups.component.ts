import {Component} from 'angular2/core';

import {ROUTER_DIRECTIVES} from 'angular2/router'

import {OpeningsComponent} from './openings.component'

import {OpeningsService} from '../services/openings.service'

@Component({
    selector: 'groups',
    template: `
    	<h2>Groups</h2>

    	<ul>
    		<li *ngFor="#group of groups">
    			<a [routerLink]="['Openings', {group: group}]"> {{ group }} </a> 
    		</li>
    	</ul>

    	<router-outlet></router-outlet>
    `,
    directives: [OpeningsComponent, ROUTER_DIRECTIVES]
})
export class GroupsComponent { 

	selectedGroup:string;

	groups:string[];

	constructor(private _openingsService:OpeningsService) {}


	ngOnInit():any {
		this.groups = this._openingsService.getGroups();
	}


	onClick(value:string) {
		this.selectedGroup = value;
	}
}