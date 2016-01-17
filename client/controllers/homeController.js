export default class HomeController {
    
    constructor(FormServices){
        this.service = FormServices;
    }

    navToForm() {
        this.service.navToForm();
    }
}

HomeController.$inject = ['FormServices'];