export default class FormController {
    
    constructor(FormServices) {
        this.userData = angular.extend({}, FormServices.newUser(), FormServices.fetchUserData());
        this.services = FormServices;
    }

    /**
     * Calls FormServices save function
     */
    save() {
        this.services.save(angular.copy(this.userData));
    }

    /**
     * Calls FormServices next function
     */
    next() {
        this.services.next(angular.copy(this.userData));
    }

    /**
     * Calls FormServices previous function
     */
    previous() {
        this.services.previous(angular.copy(this.userData));
    }

    /**
     * Calls FormServices submit function
     */
    submit() {
        this.services.submit(angular.copy(this.userData));
    }

    /**
     * Returns errors string from FormServices
     */
    getErrors() {
        return this.services.errors;
    }
}

FormController.$inject = ['FormServices'];
