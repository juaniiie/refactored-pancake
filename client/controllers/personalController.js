export default class PersonalController {
    
    constructor(){
        this.first = '';
        this.last = '';
        this.email = '';
    }

    next() {
        localStorage.setItem('firstName', this.first);
        localStorage.setItem('lastName', this.last);
        localStorage.setItem('email', this.email);
        console.log('stored');
    }
}