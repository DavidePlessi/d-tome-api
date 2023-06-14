import IBaseEntity from "../abstract/IBaseEntity";

export enum AttributeType {
    STRING = "STRING",
    NUMBER = "NUMBER",
    BOOLEAN = "BOOLEAN",
    DATE = "DATE",
}

export interface IAttribute extends IBaseEntity {
    name: string;
    type: AttributeType;
    value: string;
}

export default class Attribute implements IAttribute {
    id: string;
    name: string;
    type: AttributeType;
    value: string;

    constructor(obj: IAttribute) {
        this.id = obj.id;
        this.name = obj.name;
        this.type = obj.type;
        this.value = obj.value;
    }
}