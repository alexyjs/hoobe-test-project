const path = require('path');
const jsonServer = require('json-server');

const dbFile = path.join(__dirname, 'pageData.json');
const server = jsonServer.create();
const router = jsonServer.router(dbFile);
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Mock API server is running at http://localhost:${PORT}`);
});
