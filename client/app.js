import angular from 'angular';
import uirouter from 'angular-ui-router';

import routing from './app.config';
import FormController from './controllers/formController';
import IndexController from './controllers/indexController';

import {FormServices, IndexServices} from './services/services.js';

angular.module('app', [uirouter])
    .config(routing)
    .controller('FormController', FormController)
    .controller('IndexController', IndexController)
    .service('FormServices', FormServices)
    .service('IndexServices', IndexServices);