import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path from 'path';


import mainRoutes from './routes/index';

dotenv.config();

const server = express();

server.set('view engine', 'mustache');
server.set('view', path.join(__dirname, 'views'));
server.engine('mustache', mustache());

server.use(express.static(path.join(__dirname, '../public')));

// routes
server.use(mainRoutes);

server.use((req, res)=>{
    res.send('Sorry!!! Page not found :(');
});

server.listen(process.env.PORT);