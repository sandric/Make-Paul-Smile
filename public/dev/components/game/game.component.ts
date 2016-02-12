import {Component} from 'angular2/core';

import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {LearningComponent} from './learning.component'

import {GameIndexComponent} from './game_index.component'


import {OpeningsService} from '../../services/openings.service'

import {Opening} from "../../interfaces/opening.interface";


@Component({
    selector: 'openings',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    inputs: ['group']
})
@RouteConfig([
    {path: "/", name: "OpeningsIndex", component: GameIndexComponent, useAsDefault: true},
    {path: "/learning/:group/", name: "LearningIndex", component: LearningComponent},
    {path: "/learning/:group/:opening", name: "Learning", component: LearningComponent}
])
export class GameComponent { }