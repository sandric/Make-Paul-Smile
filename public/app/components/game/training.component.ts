import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {OpeningsComponent} from './openings.component';


import {OpeningsService} from '../../services/openings.service'

import {Opening} from "../../interfaces/opening.interface";


declare var TrainingController:any;


@Component({
    template: `
        <div class="index">
    	   	<openings [groupname]="groupname" [openingName]="initialRandomOpeningName"></openings>
    	</div>
		
		<div class="main">
			<div class="game">

				<h2></h2>

				<div id="board"></div>

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

	groupname:string = "";

	openings:Opening[];

	openingsLeft:Opening[];

	initialRandomOpeningIndex:number;
	initialRandomOpeningName:string;


	createTrainingGame() {
		this.getInitialRandomOpeningIndex();
		new TrainingController(this.groupname, this.openings, this.initialRandomOpeningIndex);
	}


    filterOpeningsBySelectedGroupName(openings:Opening[]) {
        this.openings = openings.filter(opening => opening.groupname == this.groupname);
        this.createTrainingGame();
    }

    getInitialRandomOpeningIndex() {
    	this.initialRandomOpeningIndex = Math.floor((Math.random() * this.openings.length));
    	this.initialRandomOpeningName = this.openings[this.initialRandomOpeningIndex].name;
    }



	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}


	ngOnInit():any {
		this.groupname = this._routeParams.get('groupname');

		if (this._openingsService.openings)
            this.filterOpeningsBySelectedGroupName(this._openingsService.openings);
        else 
            this._openingsService.fetchOpenings()
                .subscribe(
                    openings => this.filterOpeningsBySelectedGroupName(openings),
                    error => console.log(error),
                    () => console.log('Done getting opening')
                );
	}
}