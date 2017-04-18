export class Event {
    public _id: string;
    public name: string;
    public info: string;
    public active: boolean;
    public members;

    constructor() {
        this.name = '';
        this.info = '';
        this.members = [];
    }
}
