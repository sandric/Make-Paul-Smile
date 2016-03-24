import {Component} from 'angular2/core';

import {OpeningsComponent} from './openings.component'


@Component({
    template: `
    	<div class="index">
    	   	<openings></openings>
    	</div>

    	<div class="main">
    		<h3>Click on group name to display Opening to learn.</h3>
    	</div>
    `,
    directives: [OpeningsComponent]
})
export class GameIndexComponent {}