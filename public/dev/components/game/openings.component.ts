import {Component} from 'angular2/core';

import {RouteParams, Router, RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router'


import {LearningComponent} from './learning.component'

import {TrainingComponent} from './training.component'

import {GameIndexComponent} from './game_index.component'


import {OpeningsService} from '../../services/openings.service'

import {Opening} from "../../interfaces/opening.interface";


@Component({
    selector: 'openings',
    template: `
        <div class = "groups">
            <h2>Groups</h2>

            <ul>
                <li *ngFor="#_group of groups" [class.selected]="_group == group" class="group">
                    <a [routerLink]="['LearningIndex', {group: _group}]"> {{ _group }} </a>
                    <a [routerLink]="['Training', {group: _group}]"> train </a>
                </li>
            </ul>
        </div>
    
        <div class = "openings" *ngIf="group">
            <h2>{{group}} Openings</h2>

            <ul>
                <li *ngFor="#opening of openings" class="opening">
                    <a [routerLink]="['Learning', {group: group, opening: opening.name}]"> {{ opening.name }} </a>
                </li>
            </ul>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    inputs: ['group']
})
export class OpeningsComponent { 

    group:string;

    groups:string[];

    openingName:string = "";

    openings:Opening[];


    filterOpeningsBySelectedGroup(openings:Opening[]) {
        this.openings = openings.filter(opening => opening.group == this.group);
    }


    constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}

    ngOnInit():any {

        this.groups = this._openingsService.getGroups();

        this.group = this._routeParams.get('group');

        if (this._openingsService.openings)
            this.filterOpeningsBySelectedGroup(this._openingsService.openings);
        else 
            this._openingsService.fetchOpenings()
                .subscribe(
                    openings => this.filterOpeningsBySelectedGroup(openings),
                    error => console.log(error),
                    () => console.log('Done fetching openings')
                );
    }
}