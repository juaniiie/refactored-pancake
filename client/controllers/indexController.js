export default class IndexController {
    
    constructor(IndexServices) {
        
        this.registeredUsers = IndexServices.fetchRegisteredUsers() || [];
    }

}

IndexController.$inject = ['IndexServices'];