import {Component} from 'angular2/core';

import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {GameIndexComponent} from './game_index.component'

import {LearningComponent} from './learning.component'

import {TrainingComponent} from './training.component'

import {ResultsComponent} from './results.component'



import {OpeningsService} from '../../services/openings.service'

import {Opening} from "../../interfaces/opening.interface";


@Component({
    selector: 'openings',
    template: `
        <router-outlet></router-outlet>
    `,
    directives: [ROUTER_DIRECTIVES],
    inputs: ['groupname']
})
@RouteConfig([
    {path: "/", name: "OpeningsIndex", component: GameIndexComponent, useAsDefault: true},
    {path: "/learning/:groupname/", name: "LearningIndex", component: LearningComponent},
    {path: "/learning/:groupname/:opening", name: "Learning", component: LearningComponent},
    {path: "/training/:groupname/", name: "Training", component: TrainingComponent},
    {path: "/results/:groupname/", name: "Results", component: ResultsComponent},

])
export class GameComponent { }