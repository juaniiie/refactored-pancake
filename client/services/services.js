class FormServices {
    
    constructor($state, IndexServices) {
        this.storage = localStorage;
        this.state = $state;
        this.index = IndexServices;
    }

    navToForm() {
        this.state.go('form');
    }

    init() {
        return JSON.parse(this.storage.getItem('userData'));
    }

    newUser() {
        return {
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

    submit(userData) {
        
        this.next(userData);
        
        if (!this.index.userExists(userData.email)) {
            
            console.log('user does not exist');

            this.index.registerUser(userData);

            this.storage.removeItem('userData');

        } else {
            console.log('user already exists');
        }

    }

}

FormServices.$inject = ['$state', 'IndexServices'];


class IndexServices {
    
    constructor() {
        this.storage = localStorage;
        this.registeredUsers = JSON.parse(this.storage.getItem('users')) || [];
    }

    registerUser(userData) {
        this.registeredUsers.push(userData);
        this.storage.setItem('users', JSON.stringify(this.registeredUsers));
    }

    userExists(email) {
        for (let user of this.registeredUsers) {
            if (user.email === email) {
                return true;
            }
        }
        return false;
    }

    fetchRegisteredUsers() {
        return JSON.parse(this.storage.getItem('users'));
    }

}

export { FormServices, IndexServices };
