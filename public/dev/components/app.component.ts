import {Component} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {ResultsComponent} from './results.component'

import {GameComponent} from './game/game.component'



@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>

    	<a [routerLink]="['Results', {lastname: 'foooo'}]">results</a>
    	<a [routerLink]="['Game']">openings</a>
    	
    	<router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: "/results/:lastname", name: "Results", component: ResultsComponent},
	{path: "/game/...", name: "Game", component: GameComponent}
])
export class AppComponent {}