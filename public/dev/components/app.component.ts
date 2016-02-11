import {Component} from 'angular2/core';

import {ROUTER_DIRECTIVES} from 'angular2/router'
import {RouteConfig} from 'angular2/router'

import {GroupsComponent} from './groups.component'
import {OpeningsComponent} from './openings.component'
import {ResultsComponent} from './results.component'



@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>

    	<a [routerLink]="['Results', {lastname: 'foooo'}]">results</a>

    	<groups class="groups"></groups>

    	<div class="main">
    		<router-outlet></router-outlet>
    	</div>
    `,
    directives: [GroupsComponent, ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: "/results/:lastname", name: "Results", component: ResultsComponent},
	{path: "/groups/:group", name: "Openings", component: OpeningsComponent}
])
export class AppComponent {}