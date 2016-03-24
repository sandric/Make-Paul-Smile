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
                <li *ngFor="#_groupname of groupnames" [class.selected]="_groupname == groupname" class="group">
                    <a [routerLink]="['LearningIndex', {groupname: _groupname}]"> {{ _groupname }} </a>
                    <a [routerLink]="['Training', {groupname: _groupname}]"> train </a>
                </li>
            </ul>
        </div>
    
        <div class = "openings" *ngIf="groupname">
            <h2>{{groupname}} Openings</h2>

            <ul>
                <li *ngFor="#opening of openings" [class.selected]="opening.name == openingName" class="opening">
                    <a [routerLink]="['Learning', {groupname: groupname, opening: opening.name}]"> {{ opening.name }} </a>
                </li>
            </ul>
        </div>
    `,
    directives: [ROUTER_DIRECTIVES],
    inputs: ['groupname', 'openingName']
})
export class OpeningsComponent { 

    groupname:string;

    groupnames:string[];

    openingName:string = "";

    openings:Opening[];


    filterOpeningsBySelectedGroupName(openings:Opening[]) {
        this.openings = openings.filter(opening => opening.groupname == this.groupname);
    }


    constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}

    ngOnInit():any {

        this.groupnames = this._openingsService.getGroupNames();

        this.groupname = this._routeParams.get('groupname');

        if (this._openingsService.openings)
            this.filterOpeningsBySelectedGroupName(this._openingsService.openings);
        else 
            this._openingsService.fetchOpenings()
                .subscribe(
                    openings => this.filterOpeningsBySelectedGroupName(openings),
                    error => console.log(error),
                    () => console.log('Done fetching openings')
                );
    }
}