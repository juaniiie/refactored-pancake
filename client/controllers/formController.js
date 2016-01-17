export default class FormController {
    
    constructor(){
        
        this.userData = {
            first: '',
            last: '',
            email: '',
            make: '',
            model: '',
            year: 0,
            ccNumber: '',
            expDate: '',
            page: 1
        };

        this.store = localStorage;
    }

    save() {
        this.store.setItem('user', JSON.stringify(this.userData));
    }

    next() {
        this.userData.page += 1;
        this.save();
    }

    previous() {
        this.userData.page -= 1; 
    }
}
