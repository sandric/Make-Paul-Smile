import {Component} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {GameComponent} from './game/game.component'
import {TopComponent} from './top.component'
import {ProfileComponent} from './profile.component'



@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>

    	<nav>
	    	<a [routerLink]="['Game']">openings</a>
	    	<a [routerLink]="['Profile']">profile</a>
	    	<a [routerLink]="['Top']">top</a>
    	</nav>
    	
    	<router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
	{path: "/game/...", name: "Game", component: GameComponent},
	{path: "/top", name: "Top", component: TopComponent},
	{path: "/profile", name: "Profile", component: ProfileComponent}
])
export class AppComponent {}