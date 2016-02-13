import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {OpeningsComponent} from './openings.component';


import {OpeningsService} from '../../services/openings.service'

import {Opening} from "../../interfaces/opening.interface";


declare var TrainingController:any;


@Component({
    selector: 'learning',
    template: `
        <div class="index">
    	   	<openings [group]="group" [openingName]="initialRandomOpeningName"></openings>
    	</div>
		
		<div class="main">
			<div class="game training">

				<h2></h2>

				<div id="board"></div>


				<div class="openingsLeft">
					<h3>Openings left</h3>
					<ul>
						<li class="openingLeft" *ngFor="#opening of openings"> 
							{{ opening.name }} 
						</li>
					</ul>
				</div>

				<div id="control">

					<div>
						<label>Score:</label> <label id="ratingLabel">0</label>
					</div>
					<div>
						<label>Openings left:</label> <label id="openingsLeftLabel">0</label>
					</div>


					<div class="buttons">
						<div class="button button-end enabled">End</div>
						<div class="button button-skip enabled">Skip</div>
						<div class="button button-hint enabled">Hint</div>
					</div>

					<div id="info"></div>
					<div id="moves"></div>
				</div>

			</div>
		</div>
    `,
    directives: [OpeningsComponent, ROUTER_DIRECTIVES]
})
export class TrainingComponent {

	group:string = "";

	openings:Opening[];

	openingsLeft:Opening[];

	initialRandomOpeningIndex:number;
	initialRandomOpeningName:string;


	createTrainingGame() {
		this.getInitialRandomOpeningIndex();
		new TrainingController(this.group, this.openings, this.initialRandomOpeningIndex);
	}


    filterOpeningsBySelectedGroup(openings:Opening[]) {
        this.openings = openings.filter(opening => opening.group == this.group);
        this.createTrainingGame();
    }

    getInitialRandomOpeningIndex() {
    	this.initialRandomOpeningIndex = Math.floor((Math.random() * this.openings.length));
    	this.initialRandomOpeningName = this.openings[this.initialRandomOpeningIndex].name;
    }



	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}


	ngOnInit():any {
		this.group = this._routeParams.get('group');

		if (this._openingsService.openings)
            this.filterOpeningsBySelectedGroup(this._openingsService.openings);
        else 
            this._openingsService.fetchOpenings()
                .subscribe(
                    openings => this.filterOpeningsBySelectedGroup(openings),
                    error => console.log(error),
                    () => console.log('Done getting opening')
                );
	}
}