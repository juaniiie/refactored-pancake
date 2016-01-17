export default class FormController {
    
    constructor(Services, $timeout) {
        
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
            this.userData = Services.init();
        });

        this.services = Services;
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
        this.services.submit();
    }
}

FormController.$inject = ['Services', '$timeout'];