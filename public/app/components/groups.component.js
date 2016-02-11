System.register(['angular2/core', './openings.component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, openings_component_1;
    var GroupsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (openings_component_1_1) {
                openings_component_1 = openings_component_1_1;
            }],
        execute: function() {
            GroupsComponent = (function () {
                function GroupsComponent() {
                    this.groups = ["Open", "Semi-open", "Closed", "Semi-closed", "Indian-defence", "Flank"];
                }
                GroupsComponent.prototype.onClick = function (value) {
                    console.log(value);
                    this.selectedGroup = value;
                };
                GroupsComponent = __decorate([
                    core_1.Component({
                        selector: 'groups',
                        template: "\n    \t<h2>Groups</h2>\n\n    \t<ul class = \"groups\">\n    \t\t<li (click)=\"onClick(group)\" *ngFor=\"#group of groups\">{{ group }} </li>\n    \t</ul>\n\n    \t<openings *ngIf=\"selectedGroup\" [selectedGroup]=\"selectedGroup\"></openings>\n    ",
                        directives: [openings_component_1.OpeningsComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], GroupsComponent);
                return GroupsComponent;
            })();
            exports_1("GroupsComponent", GroupsComponent);
        }
    }
});
