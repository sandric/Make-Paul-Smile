import {Component} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {OpeningsComponent} from './openings.component'
import {ResultsComponent} from './results.component'



@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>

    	<a [routerLink]="['Results', {lastname: 'foooo'}]">results</a>
    	<a [routerLink]="['OpeningsIndex']">openings</a>

    	<div class="main">
    		<router-outlet></router-outlet>
    	</div>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: "/results/:lastname", name: "Results", component: ResultsComponent},
	{path: "/groups/", name: "OpeningsIndex", component: OpeningsComponent},
	{path: "/groups/:group", name: "Openings", component: OpeningsComponent}
])
export class AppComponent {}