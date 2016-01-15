routing.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

export default function routing($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        });
}