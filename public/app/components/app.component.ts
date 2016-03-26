import {Component} from 'angular2/core';

import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'

import {ProfileService} from '../services/profile.service';


import {HomeComponent} from './home.component'
import {GameComponent} from './game/game.component'
import {TopComponent} from './top.component'
import {ProfileComponent} from './profile.component'
import {AuthComponent} from './auth.component'




@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>

    	<nav [ngSwitch]="_profileService.isUserLogged()">
	    	<a *ngSwitchWhen="true" [routerLink]="['Game']">openings</a>
	    	<a *ngSwitchWhen="true" [routerLink]="['Profile']">profile</a>
	    	<a *ngSwitchWhen="true" [routerLink]="['Top']">top</a>

            <a *ngSwitchWhen="true" (click)="signOut()">sign out</a>

            <a *ngSwitchWhen="false" [routerLink]="['Auth']">authorize</a>
    	</nav>
    	
        <div class="main">
    	    <router-outlet></router-outlet>
        </div>
    `,
    providers: [ProfileService],
    directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
    {path: "/", name: "Home", component: HomeComponent},
	{path: "/game/...", name: "Game", component: GameComponent},
	{path: "/top", name: "Top", component: TopComponent},
	{path: "/profile", name: "Profile", component: ProfileComponent},
    {path: "/auth", name: "Auth", component: AuthComponent}
])
export class AppComponent {

    constructor(private _profileService: ProfileService) {}

    signOut() {

        console.log("Signing out");

        this._profileService.signOut();
    }
}