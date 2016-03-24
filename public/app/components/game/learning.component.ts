import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {OpeningsComponent} from './openings.component';


import {OpeningsService} from '../../services/openings.service'

import {Opening} from "../../interfaces/opening.interface";


declare var LearningController:any;


@Component({
    template: `
    	<div class="index">
    	   	<openings [groupname]="groupname" [openingName]="openingName"></openings>
    	</div>

    	<div *ngIf="openingName" class="main">
    		<div class="game">

				<h2>{{ openingName }}</h2>

				<div id="board">bbboard</div>

				<div id="control">
					<div class="buttons">
						<span class="button button-reload enabled">Reload</span>
						<span class="button button-play enabled">Play</span>
						<span class="button button-step enabled">Step</span>
					</div>

					<div id="info"></div>
					<div id="moves"></div>
				</div>
			</div>
    	</div>

    	<div *ngIf="!openingName" class="main">
    		<h1>Select opening to learn.</h1>
    	</div>
    `,
    directives: [OpeningsComponent, ROUTER_DIRECTIVES]
})
export class LearningComponent {

	groupname:string = "";

	openingName:string = "";

	opening:Opening;

	createLearningGame() {
		console.log('creating...');
		console.log(this.opening);
		new LearningController(
                                this.opening.name,
                                this.opening.moves,
                                this.opening.annotations,
                                this.opening.starting_move,
                                this.opening.details,
                                this.opening.groupname
                                );
	}



	getOpeningByName(openings:Opening[]) {
		return openings.filter(opening => opening.name == this.openingName)[0];
	}

	initializeOpening(openings) {
		this.opening = this.getOpeningByName(openings);
		this.createLearningGame();
	}


	constructor(private _router:Router, private _routeParams: RouteParams, private _openingsService:OpeningsService) {}


	ngOnInit():any {
		this.groupname = this._routeParams.get('groupname');
		this.openingName = this._routeParams.get('opening');
	}

	ngAfterViewInit():any {
		if (this.openingName) {
			if (this._openingsService.openings)
	            this.initializeOpening(this._openingsService.openings);
	        else 
	            this._openingsService.fetchOpenings()
	                .subscribe(
	                    openings => this.initializeOpening(openings),
	                    error => console.log(error),
	                    () => console.log('Done getting opening')
	                );
        }
	}
}