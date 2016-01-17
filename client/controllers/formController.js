export default class FormController {
    
    constructor($timeout) {
        
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

        this.store = localStorage;

        $timeout(() => {
            this.init();
        });
    }

    init() {

        this.userData = JSON.parse(localStorage.getItem('userData'));
    }

    save() {
        this.store.setItem('userData', JSON.stringify(this.userData));
    }

    next() {
        this.userData.page++;
        this.save();
    }

    previous() {
        this.userData.page--; 
    }

    submit() {
        this.next();
        //put in all users index
    }
}

FormController.$inject = ['$timeout'];
