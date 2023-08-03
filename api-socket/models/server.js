import express from 'express';
import {createServer} from 'http';
import {Server as ServerIO} from 'socket.io';
import config from '../config.js';
import Sockets from './sockets.js';
import path from 'path';
import cors from 'cors';
import * as url from 'url';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL('.', import.meta.url));

class Server {
    constructor() {
        this.app = express();
        this.server = createServer(this.app);
        this.io = new ServerIO(this.server);
        this.port = config.api.port;
    }

    middlewares() {
        this.app.use(cors());
        this.app.use(express.static(path.resolve(__dirname, '../public')));
    }

    listenSockets() {
        new Sockets(this.io);
    }

    start(port = this.port) {
        this.middlewares();
        this.listenSockets();
        this.server.listen(port, () => {
            console.log(`Server is listening on http://localhost:${port}`);
        });
    }


    stop() {
        this.server.close();
    }

    getSocket() {
        return this.io;
    }

    getApp() {
        return this.app;
    }
}

export default Server;