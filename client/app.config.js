export default function routing($urlRouterProvider, $stateProvider) {

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
        })
        ;
}

routing.$inject = ['$urlRouterProvider', '$stateProvider'];