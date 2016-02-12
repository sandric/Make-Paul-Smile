import {Component} from 'angular2/core';
import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {OpeningsComponent} from './openings.component';

@Component({
    selector: 'learning',
    template: `
    	<openings></openings>
    	<h1>DA Learning: {{opening}}</h1>
    `,
    directives: [OpeningsComponent, ROUTER_DIRECTIVES],
    inputs: ['opening']
})
export class LearningComponent {

	opening:string = "";

	constructor(private _router:Router, private _routeParams: RouteParams) {}

	ngOnInit():any {
		this.opening = this._routeParams.get('opening');
	}
}