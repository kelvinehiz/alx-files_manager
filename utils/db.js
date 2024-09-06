import express from 'express';
import startServer from '../libs/boot';
import envLoader from '../utils/env_loader';
import injectRoutes from './routes';
import injectMiddlewares from './libs/middlewares';

const server = express();

injectMiddlewares(server);
injectRoutes(server);
startServer(server);

export default server;
