import IBaseEntity from "../abstract/IBaseEntity";

export interface IAttributesGroup extends IBaseEntity {
    name: string;
}

export default class AttributesGroup implements IAttributesGroup {
    id: string;
    name: string;

    constructor(obj: IAttributesGroup) {
        this.id = obj.id;
        this.name = obj.name;
    }
}