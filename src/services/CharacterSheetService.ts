import CharacterSheet from "../entities/CharacterSheet";
import EntityService from "./EntityService";

export default class CharacterSheetService extends EntityService<CharacterSheet> {
    constructor() {
        super('CharacterSheet');
    }
}