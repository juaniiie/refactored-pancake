export default class IndexController {
    
    constructor(IndexServices) {
        
        this.registeredUsers = [];
    }

}

IndexController.$inject = ['IndexServices'];