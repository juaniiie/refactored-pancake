export default class FormController {
    
    constructor(FormServices, $timeout) {
        
        this.userData = {
            first: '',
            last: '',
            email: '',
            make: '',
            model: '',
            year: '',
            ccNumber: '',
            expDate: '',
            page: 1
        };


        $timeout(() => {
            this.userData = FormServices.init() || this.userData;
        });

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