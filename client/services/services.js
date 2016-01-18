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
     * Stringifies and stores userData in localStorage
     * @param {Object} userData 
     */
    save(userData) {
        this.storage.setItem('userData', JSON.stringify(userData));
    }

    /**
     * Checks if user already exists
     * If false: increases userData page property by 1,
     * Calls this.save with userData and resets this.errors to ''
     * If true: updates this.errors 
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

    /**
     * Decreases userData page property by 1,
     * Calls this.save with userData
     * If true, updates this.errors 
     * @param {Object} userData 
     */
    previous(userData) {
        userData.page--;
        this.save(userData);
    }

    /**
     * Checks if user already exists
     * If false: increases userData page property by 1,
     * calls this.next with userData, calls IndexServices.registerUser  
     * function with userData and deletes userData from localStorage
     * If true: updates this.errors 
     * @param {Object} userData 
     */
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

    /**
     * Pushes userData into this.registeredUsers
     * Stores updated this.registeredUsers in localStorage
     * @param {Object} userData 
     */
    registerUser(userData) {
        this.registeredUsers.push(userData);
        this.storage.setItem('users', JSON.stringify(this.registeredUsers));
    }

    /**
     * Validates if user email exists in localStorage
     * Returns Boolean
     * @param {string} email 
     */
    userExists(email) {
        for (let user of this.registeredUsers) {
            if (user.email === email) {
                return true;
            }
        }
        return false;
    }

    /**
     * Returns registered users stored in localStorage
     */
    fetchRegisteredUsers() {
        return JSON.parse(this.storage.getItem('users'));
    }

}

export { FormServices, IndexServices };
