import {Component} from 'angular2/core';
import {OpeningsComponent} from './openings.component'


@Component({
    selector: 'groups',
    template: `
    	<h2>Groups</h2>

    	<ul>
    		<li (click)="onClick(group)" *ngFor="#group of groups">{{ group }} </li>
    	</ul>

    	<openings *ngIf="selectedGroup" [selectedGroup]="selectedGroup" class="openings"></openings>
    `,
    directives: [OpeningsComponent]
})
export class GroupsComponent { 

	selectedGroup:string;

	groups:string[] = ["Open", "Semi-open", "Closed", "Semi-closed", "Indian-defence", "Flank"];

	onClick(value:string) {
		this.selectedGroup = value;
	}
}