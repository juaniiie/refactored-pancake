export default class HomeController {
    
    constructor(HomeService){
        this.homeService = HomeService;
    }

    navToForm() {
        this.homeService.navToForm();
    }
}

HomeController.$inject = ['HomeService'];