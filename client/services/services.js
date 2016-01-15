export default class HomeService {
    constructor() {
        this.names = ['John', 'Elisa', 'Mark', 'Annie'];
    }

    getName() {
        console.log('getnName called')
        const totalNames = this.names.length;
        const rand = Math.floor(Math.random() * totalNames);
        return this.names[rand];
    }
}