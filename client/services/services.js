export default class Services {
    constructor($state) {
        this.state = $state;
    }

    navToForm() {
        this.state.go('form');
    }
}

Services.$inject = ['$state'];