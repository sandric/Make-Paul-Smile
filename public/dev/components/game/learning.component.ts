import {Component} from 'angular2/core';
import {RouteParams, Router, ROUTER_DIRECTIVES} from 'angular2/router';

import {OpeningsComponent} from './openings.component';


declare var LearningController:any;


@Component({
    selector: 'learning',
    template: `
    	<div class="index">
    	   	<openings [group]></openings>
    	</div>

    	<div *ngIf="opening" class="main">
    		<div class="game learning">

				<h2>{{ opening.name }}</h2>

				<div id="board">olaola</div>

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

    	<div *ngIf="!opening" class="main">
    		<h1>Select opening to learn.</h1>
    	</div>
    `,
    directives: [OpeningsComponent, ROUTER_DIRECTIVES],
    inputs: ['group', 'opening']
})
export class LearningComponent {

	group:string = "";

	opening:string = "";

	constructor(private _router:Router, private _routeParams: RouteParams) {}

	ngOnInit():any {
		this.group = this._routeParams.get('group');
		this.opening = this._routeParams.get('opening');
	}

	ngAfterViewInit():any {
		if (this.opening)
			new LearningController(
                                    "Portuguese Opening",
                                    ["e2 - e4","c7 - c5","Ng1 - f3","c5 - c4","d2 - d4","c4 - c3"],
                                    ["first","second","third","fourth","fifth","sixth"],
                                    1,
                                    "trulala",
                                    "Open"
                                );
	}
}