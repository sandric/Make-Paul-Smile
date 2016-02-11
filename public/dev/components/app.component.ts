import {Component} from 'angular2/core';
import {GroupsComponent} from './groups.component'


@Component({
    selector: 'MPS',
    template: `
    	<h1>Make Paul Smile</h1>
    	<groups class="groups"></groups>
    `,
    directives: [GroupsComponent]
})
export class AppComponent { }