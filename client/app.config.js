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
            template: require('./templates/indexer.html'),
            controller: 'IndexController',
            controllerAs: 'indexCtrl'
        });

    $mdThemingProvider.definePalette('mainColor', {
        '50': 'ffebee',
        '100': 'ffcdd2',
        '200': 'ef9a9a',
        '300': 'e57373',
        '400': 'ef5350',
        '500': '84B8C3', //custom color
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',                           
        'contrastLightColors': undefined
    });

    $mdThemingProvider.definePalette('accentColor', {
        '50': 'BDBDBD',
        '100': '8BC34A', //custom
        '200': 'FF5722', //custom
        '300': 'e57373',
        '400': 'ef5350',
        '500': 'FFB300', //custom 
        '600': 'e53935',
        '700': 'd32f2f',
        '800': 'c62828',
        '900': 'b71c1c',
        'A100': 'ff8a80',
        'A200': 'ff5252',
        'A400': 'ff1744',
        'A700': 'd50000',
        'contrastDefaultColor': 'light',                          
        'contrastLightColors': undefined
    });


    $mdThemingProvider.theme('default')
        .primaryPalette('mainColor')
        .accentPalette('accentColor', {
            'default': '500',
            'hue-1': '100',
            'hue-2': '200'
        }); 
}

routing.$inject = ['$urlRouterProvider', '$stateProvider', '$mdThemingProvider'];
