import {Component} from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';

@Component({
    selector: 'results',
    template: `
    	<h1>DA RESULTS: {{lastName}}</h1>
    `,
})
export class ResultsComponent {

	lastName:string = "";

	constructor(private _router:Router, private _routeParams: RouteParams) {}

	ngOnInit():any {
		this.lastName = this._routeParams.get('lastname');
	}
}