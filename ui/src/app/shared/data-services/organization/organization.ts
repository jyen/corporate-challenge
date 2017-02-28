export class Organization {
    public _id: string;
    public name: string;
    public info: string;
    public active: string;
    public division: string;
    public admins;
    public events;

    constructor() {
        this.name = '';
        this.info = '';
        this.division = '';
        this.admins = [];
        this.events = [];
    }
}
