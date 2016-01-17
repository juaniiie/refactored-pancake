export default class HomeController {
    
    constructor(Services){
        this.service = Services;
    }

    navToForm() {
        this.service.navToForm();
    }
}

HomeController.$inject = ['Services'];