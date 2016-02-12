import {Component} from 'angular2/core';

import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {OpeningsService} from '../../services/openings.service'


import {OpeningsComponent} from './openings.component'


@Component({
    template: `
    	<div class="index">
    	   	<openings></openings>
    	</div>

    	<div class="main">
    		<h3>TRAINING {{group}}</h3>
    	</div>
    `,
    directives: [OpeningsComponent]
})
export class TrainingComponent {

	group:string = "";

	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}



	ngOnInit():any {
		this.group = this._routeParams.get('group');
	}
}