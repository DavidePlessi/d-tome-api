import IBaseRouteMethod from "../abstract/IBaseRouteMethod";
import CharacterSheet from "../entities/CharacterSheet";
import BaseEntityController from "./BaseEntityController";
import CharacterSheetService from "../services/CharacterSheetService";

export default class CharacterSheetController extends BaseEntityController<
    CharacterSheet,
    CharacterSheetService
> {
    constructor(
        path: string,
        routes: IBaseRouteMethod[],
        getFilterFromQuery: (body: any) => any,
        getEntityFromBody: (body: any) => any
    ) {
        super(
            path,
            routes,
            new CharacterSheetService(),
            getFilterFromQuery,
            getEntityFromBody
        );
    }
}