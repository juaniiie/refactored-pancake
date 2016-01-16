export default class HomeService {
    constructor($state) {
        this.state = $state;
    }

    navToForm() {
        this.state.go('personal');
    }
}

HomeService.$inject = ['$state'];