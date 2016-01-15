export default class HomeController {
    
    constructor(HomeService){
        this.name = 'World';
        this.random = HomeService;
    }

    changeName() {
        this.name = 'angular-tips';
    }

    randomName() {
        this.name = this.random.getName();
    }
}

HomeController.$inject = ['HomeService'];