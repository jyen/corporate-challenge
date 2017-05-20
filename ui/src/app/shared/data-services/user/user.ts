export class User {
    public _id: string;
    public email: string;
    public password: string;
    public role: string;
    public name: string;
    public organization: any;
    public phone: any;
    public participantType: string;

    constructor() {
        this.name = '';
        this.email = '';
        this.password = '';
        this.organization = null;
    }
}
