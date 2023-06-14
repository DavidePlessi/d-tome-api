import IBaseController from "./IBaseController";
import {IBaseEntityService} from "./IBaseEntityService";
import IBaseEntity from "./IBaseEntity";

export default interface IBaseEntityController <
    TEntity extends IBaseEntity,
    TService extends IBaseEntityService<TEntity>
> extends IBaseController {
    service: TService;
}