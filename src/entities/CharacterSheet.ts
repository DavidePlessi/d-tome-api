import IBaseEntity from "../abstract/IBaseEntity";

export interface ICharacterSheet extends IBaseEntity {
    name: string;
}

export default class CharacterSheet implements ICharacterSheet {
    id: string;
    name: string;

    constructor(obj: ICharacterSheet) {
        this.id = obj.id;
        this.name = obj.name;
    }
}