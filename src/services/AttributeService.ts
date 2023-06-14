import Attribute from "../entities/Attribute";
import EntityService from "./EntityService";

export default class AttributeService extends EntityService<Attribute> {
    constructor() {
        super('Attribute');
    }
}