import express from "express"
import {config} from "dotenv"

config();

const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());

app.get("/:nome/:idade", (request, response) => {
    const nome = request.params.nome;
    const idade = request.params.idade;
    return response.status(200).send({ usuario: nome , idade: idade});
});

app.post("/", (request, response) => {
    const nome = request.query.nome
    return response.status(200).send({ message: nome });
});

app.listen(port, () => {
    console.log(`⚡Server is listening on port http://localhost:${port}`);
});

