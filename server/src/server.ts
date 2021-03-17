import express from 'express';
import routes from './routes';
import cors from 'cors'; // permite acesso de outras aplicações de portas diferentes

const app = express();
app.use(cors());
app.use(express.json()); //Converte o body para o json

app.use(routes);

app.listen(3333); // faz a aplicação ouvir o HTTP na porta; porta 80 é a padrão

