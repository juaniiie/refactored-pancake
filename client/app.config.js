export default function routing($urlRouterProvider, $stateProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.html'),
            controller: 'HomeController',
            controllerAs: 'homeCtrl'
        })
        .state('form', {
            url: '/form',
            template: require('./templates/form.html'),
            controller: 'FormController',
            controllerAs: 'formCtrl'
        })
        .state('index', {
            url: '/index',
            template: require('./templates/index.html'),
            controller: 'IndexController',
            controllerAs: 'indexCtrl'
        })
        ;
}

routing.$inject = ['$urlRouterProvider', '$stateProvider'];