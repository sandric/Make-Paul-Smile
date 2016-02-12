import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router'

import {OpeningsComponent} from './openings.component'


@Component({
    selector: 'learning',
    template: `
    	<div class="index">
    	   	<openings [group]></openings>
    	</div>

    	<div *ngIf="opening" class="main">
    		<h1>DA Learning: {{group}}:{{opening}} opening</h1>
    	</div>

    	<div *ngIf="!opening" class="main">
    		<h1>Select opening to learn.</h1>
    	</div>
    `,
    directives: [OpeningsComponent, ROUTER_DIRECTIVES],
    inputs: ['group', 'opening']
})
export class LearningComponent {

	group:string = "";

	opening:string = "";

	constructor(private _router:Router, private _routeParams: RouteParams) {}

	ngOnInit():any {
		this.group = this._routeParams.get('group');
		this.opening = this._routeParams.get('opening');
	}
}