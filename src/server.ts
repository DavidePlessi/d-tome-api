import express from "express";
import routes from "./routes";

function getServer() {
    const server = express();
    server.use(express.json());
    server.use('/', routes);

    server.use((req: express.Request, res: express.Response) => {
        res.status(404).send();
    });

    server.use((err: any, req: express.Request, res: express.Response) => {
        console.log("Unhandled error: " + err);
        res.status(err.status || 200).send();
    });

    return server;
}

export default getServer;