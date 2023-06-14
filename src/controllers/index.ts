import AttributeController from "./AttributeController";
import AttributesGroupController from "./AttributesGroupController";
import CampaignController from "./CampaignController";
import CharacterSheetController from "./CharacterSheetController";
import IBaseController from "../abstract/IBaseController";

const availableControllers = [
    new AttributeController(
        '/attribute',
        [],
        (query) => query,
        (body) => body
    ),
    new AttributesGroupController(
        '/attributes-group',
        [],
        (query) => query,
        (body) => body
    ),
    new CampaignController(
        '/campaign',
        [],
        (query) => query,
        (body) => body
    ),
    new CharacterSheetController(
        '/character-sheet',
        [],
        (query) => query,
        (body) => body
    )
] as IBaseController[]

export default availableControllers;