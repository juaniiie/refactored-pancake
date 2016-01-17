class FormServices {
    
    constructor($state, IndexServices) {
        this.storage = localStorage;
        this.state = $state;
        this.index = IndexServices;
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

    submit(userData) {
        this.next(userData);
        
        if(!this.index.userExists(userData.email)) {
            console.log('user does not exist');
            this.index.registerUser(userData);   
        } else {
            console.log('user already exists');
        }
    }

    navToForm() {
        this.state.go('form');
    }
}

FormServices.$inject = ['$state', 'IndexServices'];


class IndexServices {
    
    constructor() {
        this.storage = localStorage;
        this.registeredUser = [];
    }

    registerUser(userData) {
        console.log('userData', userData);
        this.registeredUsers.push(userData);
        console.log('registeredUsers:', this.registeredUsers);
        this.storage.setItem('users', JSON.stringify(this.registeredUsers));
    }

    userExists(email) {
        
    }

    registeredUsersList() {
        if(this.registeredUsers.length > 0) {
            return this.registeredUsers.entries();
        } else {
            return undefined;
        }
    }


}

export { FormServices, IndexServices };
