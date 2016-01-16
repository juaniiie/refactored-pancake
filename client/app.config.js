export default function routing($locationProvider, $urlRouterProvider, $stateProvider) {
    $locationProvider.html5Mode(true);
    
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            template: require('./templates/home.html'),
            controller: 'HomeController',
            controllerAs: 'home'
        })
        .state('personal', {
            url: '/personal',
            template: require('./templates/personal.html'),
            controller: 'PersonalController',
            controllerAs: 'personal'
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