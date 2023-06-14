import AttributesGroup from "../entities/AttributesGroup";
import EntityService from "./EntityService";

export default class AttributesGroupService extends EntityService<AttributesGroup>{
    constructor() {
        super('AttributesGroup');
    }
}