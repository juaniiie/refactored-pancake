import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import HomeController from './controllers/HomeController';

angular.module('app', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController);
