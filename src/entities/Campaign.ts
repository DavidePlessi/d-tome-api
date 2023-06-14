import IBaseEntity from "../abstract/IBaseEntity";

export interface ICampaign extends IBaseEntity {
    name: string;
}

export default class Campaign implements ICampaign {
    id: string;
    name: string;

    constructor(obj: ICampaign) {
        this.id = obj.id;
        this.name = obj.name;
    }
}