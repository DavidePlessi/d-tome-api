import getServer from "./server";

const port = 3000;

const server = getServer();

server.listen(port, () => {
    console.log('Server listening on port 3000');
});
