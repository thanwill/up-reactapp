import express from 'express';
import routes from './routes.js';
import db from './config/database.js';

const app = express();
const port = 3000;

app.use(express.json());
app.use(routes);

db.sync(() => console.log(`Banco de dados conectado: ${process.env.DB_NAME}.`))
app.listen(port, ()=> console.log(`Servidor iniciando na porta ${port}.`));