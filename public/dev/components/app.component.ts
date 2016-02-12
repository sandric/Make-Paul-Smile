import {Component} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {OpeningsComponent} from './openings.component'
import {ResultsComponent} from './results.component'
import {LearningComponent} from './learning.component'




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
	{path: "/openings/", name: "OpeningsIndex", component: OpeningsComponent},
	{path: "/openings/:group", name: "Openings", component: OpeningsComponent},
	{path: "/learning/:opening", name: "Learning", component: LearningComponent}
])
export class AppComponent {}