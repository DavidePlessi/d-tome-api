import IBaseEntityController from "../abstract/IBaseEntityController";
import IBaseEntity from "../abstract/IBaseEntity";
import {IBaseEntityService} from "../abstract/IBaseEntityService";
import IBaseRouteMethod from "../abstract/IBaseRouteMethod";

export default class BaseEntityController<
    TEntity extends IBaseEntity,
    TService extends IBaseEntityService<TEntity>
> implements IBaseEntityController<TEntity, TService>{
    path: string;
    routes: IBaseRouteMethod[];
    service: TService;
    getFilterFromQuery: (body: any) => any;
    getEntityFromBody: (body: any) => any;

    constructor(
        path: string,
        routes: IBaseRouteMethod[],
        service: TService,
        getFilterFromQuery: (body: any) => any,
        getEntityFromBody: (body: any) => any
    ) {
        this.path = path;
        this.routes = routes;
        this.service = service;
        this.getFilterFromQuery = getFilterFromQuery || ((body: any) => body);
        this.getEntityFromBody = getEntityFromBody || ((body: any) => body);

        this.routes.push({
            method: 'post',
            path: '/',
            handler: async (req, res) => {
                try {
                    const entity = this.getEntityFromBody(req.body);
                    const result = await this.service.create(entity);
                    await res.status(200).json(result);
                } catch (e) {

                }
            }
        });

        this.routes.push({
            method: 'delete',
            path: '/:id',
            handler: async (req, res) => {
                try {
                    const result = await this.service.delete(req.params.id);
                    await res.status(200).json(result);
                } catch (e) {

                }
            }
        });

        this.routes.push({
            method: 'get',
            path: '/:id',
            handler: async (req, res) => {
                try {
                    const result = await this.service.get(req.params.id);
                    await res.status(200).json(result);
                } catch (e) {

                }
            }
        });

        this.routes.push({
            method: 'get',
            path: '/',
            handler: async (req, res) => {
                try {
                    const filters = this.getFilterFromQuery(req.query);
                    const result = await this.service.getList(filters);
                    await res.status(200).json(result);
                } catch (e) {

                }
            }
        });

        this.routes.push({
            method: 'put',
            path: '/',
            handler: async (req, res) => {
                try {
                    const entity = this.getEntityFromBody(req.body);
                    const result = await this.service.update(entity);
                    await res.status(200).json(result);
                } catch (e) {

                }
            }
        });
    }

}