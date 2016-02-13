import {Component} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {GameComponent} from './game/game.component'


//        <a [routerLink]="['Results', {lastname: 'foooo'}]">results</a>


@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>

    	<a [routerLink]="['Game']">openings</a>
    	
    	<router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: "/game/...", name: "Game", component: GameComponent}
])
export class AppComponent {}