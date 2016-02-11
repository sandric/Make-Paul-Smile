import {Component} from 'angular2/core';

@Component({
    selector: 'openings',
    template: `
    	<h2>{{selectedGroup}} Openings</h2>

    	<ul>
    		<li *ngFor="#opening of openings">{{ opening }}</li>
    	</ul>
    `,
    inputs: ['selectedGroup']
})
export class OpeningsComponent { 

	selectedGroup:string;

	openings:string[] = ["Open", "Semi-open", "Closed", "Semi-closed", "Indian-defence", "Flank"];
}