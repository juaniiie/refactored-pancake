routing.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

export default function routing($locationProvider, $urlRouterProvider, $stateProvider) {
    
    $locationProvider.html5Mode(true);
    
    $urlRouterProvider('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'client/templates/home.html',
            controller: 'HomeController',
            controllerAs: 'home'
        });
}