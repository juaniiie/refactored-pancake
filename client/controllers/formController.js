export default class FormController {
    
    constructor(FormServices, $timeout) {
        
        this.userData = angular.extend({}, FormServices.newUser(), FormServices.init());

        this.services = FormServices;
    }

    save() {
        this.services.save(this.userData);
    }

    next() {
        this.services.next(this.userData);
    }

    previous() {
        this.services.previous(this.userData);
    }

    submit() {
        this.services.submit(this.userData);
    }
}

FormController.$inject = ['FormServices', '$timeout'];