import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import HomeController from './controllers/homeController';
import PersonalController from './controllers/personalController';
import HomeService from './services/services.js';

angular.module('app', [uirouter])
    .config(routing)
    .controller('HomeController', HomeController)
    .controller('PersonalController', PersonalController)
    .service('HomeService', HomeService);