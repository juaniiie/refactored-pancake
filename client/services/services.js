export default class Services {
    
    constructor($state) {
        this.storage = localStorage;
    }

    init(userData) {
        return JSON.parse(this.storage.getItem('userData'));
    }

    save(userData) {
        this.storage.setItem('userData', JSON.stringify(userData));
    }

    next(userData) {
        userData.page++;
        this.save(userData);
    }

    previous(userData) {
        userData.page--;
        this.save(userData);
    }

    submit() {
        this.next();
        //save user to all users index
    }

    navToForm() {
        $state.go('form');
    }
}

Services.$inject = ['$state'];