import "zone.js/dist/zone.min.js";
import "reflect-metadata"

import {bootstrap}    from 'angular2/platform/browser'

import {ROUTER_PROVIDERS, LocationStrategy, HashLocationStrategy} from 'angular2/router'

import {HTTP_PROVIDERS} from 'angular2/http';

import {provide} from 'angular2/core'

import {AppComponent} from './components/app.component'


import {OpeningsService} from './services/openings.service'



bootstrap(AppComponent, [OpeningsService, ROUTER_PROVIDERS, HTTP_PROVIDERS, provide(LocationStrategy, {useClass: HashLocationStrategy})]);