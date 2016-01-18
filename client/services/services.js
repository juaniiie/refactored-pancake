class FormServices {
    
    constructor($state, IndexServices) {
        this.storage = localStorage;
        this.index = IndexServices;
        this.errors = '';
    }

     /**
     * Returns userData stored in localStorage
     */
    fetchUserData() {
        return JSON.parse(this.storage.getItem('userData'));
    }

    /**
     * Returns userData object
     */
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

    /**
     * Stringifies and tores userData in localStorage
     * @param {Object} userData 
     */
    save(userData) {
        this.storage.setItem('userData', JSON.stringify(userData));
    }

    /**
     * Stringifies and tores userData in localStorage
     * @param {Object} userData 
     */
    next(userData) {
        if (!this.index.userExists(userData.email)) {
            userData.page++;
            this.save(userData);
            this.errors = '';
        } else {
            this.errors = 'User email already exists.';
        }
    }

    previous(userData) {
        userData.page--;
        this.save(userData);
    }

    submit(userData) {
        if (!this.index.userExists(userData.email)) {
            this.next(userData);
            this.index.registerUser(userData);
            this.storage.removeItem('userData');
            this.errors = '';
        } else {
            this.errors = 'User email already exists.';
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
