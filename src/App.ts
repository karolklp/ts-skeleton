/// <reference path="../vendor/typings/angularjs/angular.d.ts" />
/// <reference path="../vendor/typings/angular-ui-router/angular-ui-router.d.ts" />
/// <reference path="../vendor/typings/toastr/toastr.d.ts" />
/// <reference path="../vendor/typings/angularjs/angular-animate.d.ts" />
/* tslint:disable:variable-name */

import * as angular from 'angular';
import 'angular-ui-router';
import 'angular-animate';

angular.module('app', ['ui.router', 'ngAnimate']);

const App:angular.IAngularStatic = angular;

export {App};