export default function routing($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    
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
        // .state('car', {
        //     url: '/car',
        //     template: require('./templates/car.html'),
        //     controller: 'CarController',
        //     controllerAs: 'car'
        // })
        ;
}

routing.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];