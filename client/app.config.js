export default function routing($urlRouterProvider, $stateProvider, $mdThemingProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('form', {
            url: '/',
            template: require('./templates/form.html'),
            controller: 'FormController',
            controllerAs: 'formCtrl'
        })
        .state('index', {
            url: '/index',
            template: require('./templates/index.html'),
            controller: 'IndexController',
            controllerAs: 'indexCtrl'
        });

    $mdThemingProvider.theme('default')
        .primaryPalette('indigo')
        .accentPalette('orange', {
            'default': '500'
        });    
}

routing.$inject = ['$urlRouterProvider', '$stateProvider', '$mdThemingProvider'];