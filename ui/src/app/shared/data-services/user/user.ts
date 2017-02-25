export class User {
    public _id: string;
    public email: string;
    public password: string;
    public role: string;
    public name: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
    }
}
