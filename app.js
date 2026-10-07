import swaggerUi from "swagger-ui-express"
import swaggerSpec from "./swagger.js"
import express from "express"


const app = express()
app.use(express.json());


app.use("/docs",swaggerUi.serve,swaggerUi.setup(swaggerSpec))


app.get('/status', (req, res) => {
res.status(200).json({ status: 'ok' });
});


const missoes = [


    {
        "id": 1,
        "nome": "Apollo 11",
        "ano": "1969",
        "agencia": "NASA",
        "status": "concluida"
    },
    {
        "id": 2,
        "nome": "Voyager 1",
        "ano": "1977",
        "agencia": "NASA",
        "status": "Em operação"
    },
    {
        "id": 3,
        "nome": "Artemis II",
        "ano": "2026",
        "agencia": "NASA",
        "status": "planejada"
    },
    {
        "id": 4,
        "nome": "seris IV",
        "ano": "2017",
        "agencia": "NASA",
        "status": "concluida"
    },
    {
        "id": 5,
        "nome": "inges III",
        "ano": "1986",
        "agencia": "NASA",
        "status": "concluida"
    }
]


/**
* @openapi
* /missoes:
*   get:
*     summary: Busca todas as missoes
*     parameters:
*       - in: path
*         name: id
*         required: false
*         schema:
*           type: integer
*     responses:
*       200:
*         description: missoes encontradas
*       404:
*         description: Missoes não encontradas
*/
app.get('/missoes', (req, res) => {
    const { nome, ano, agencia, status } = req.query


    if (nome || ano || agencia || status) {
        const missoesFiltrados = missoes.filter(item => item.nome.includes(nome)) || item.ano.includes(ano) || item.agencia.includes(agencia) || item.status.includes(status)


         res.status(200).json(missoes)
    } else {
        res.status(200).json(missoes)
    }
})


/**
* @openapi
* /missoes/{id}:
*   get:
*     summary: Busca uma missao pelo id
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: Missao encontrada
*       404:
*         description: Missao não encontrada
*/
app.get('/missoes/:id', (req, res) => {
const missao = missoes.find(p => p.id === Number(req.params.id))


if (!missao) return res.status(404).json({ erro: 'missao não encontrada' })


res.status(200).json(missao)
})

/**
* @openapi
* /missoes:
*   post:
*     summary: Cria uma missao
*     parameters:
*       - in: path
*         name: id
*         required: false
*         schema:
*           type: integer
*     responses:
*       201:
*         description: missao criada com sucesso
*       400:
*         description: preencha todos os campos corretamente
*/

app.post('/missoes', (req, res) => {
const novaMissao = { id: missoes.length + 1, nome: req.body.nome, ano: req.body.ano, agencia: req.body.agencia, status: req.body.status }


missoes.push(novaMissao)


res.status(201).json(novaMissao)
})

/**
* @openapi
* /missoes/{id}/xml:
*   get:
*     summary: Procura um missao pelo id
*     parameters:
*       - in: path
*         name: id
*         required: false
*         schema:
*           type: integer
*     responses:
*       200:
*         description: missoes encontradas
*       404:
*         description: Missoes não encontradas
*/

app.get('/missoes/:id/xml', (req, res) => {
const missao = missoes.find(p => p.id === Number(req.params.id))


if (!missao) return res.status(404).send('<erro>missao não encontrada</erro>')
    const xml = `<missao><id>${missao.id}</id><nome>${missao.nome}</nome><ano>${missao.ano}</ano><agencia>${missao.agencia}</agencia><status>${missao.status}</status></missao>`
res.status(200).type('application/xml').send(xml)
})

/**
* @openapi
* /missoes/{id}:
*   put:
*     summary: Altera uma missao pelo id
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       200:
*         description: missao alterada com sucesso
*       400:
*         description: missao não alterada
*       404:
*         description: missao não encontrada
*/

app.put("/missoes/:id", (req, res) => {
    const missao = missoes.find((p) => p.id === Number(req.params.id))


    if (!missao) {
        return res.status(404).json({ erro: 'missao não encontrado' })
}


    if (req?.body?.nome && req.body.nome != "") {
        missao.nome = req.body.nome
}


    if (req?.body?.ano && req.body.nome != "") {
        missao.ano = req.body.ano
}

    if (req?.body?.agencia && req.body.nome != "") {
        missao.agencia = req.body.agencia
}


    if (req?.body?.status && req.body.nome != "") {
        missao.status = req.body.status
}
    res.status(200).json(missao)
})


/**
* @openapi
* /missoes/{id}:
*   delete:
*     summary: Apaga um missao pelo id
*     parameters:
*       - in: path
*         name: id
*         required: true
*         schema:
*           type: integer
*     responses:
*       204:
*         description: missao deletada com sucesso
*       404:
*         description: missao não encontrada
*/
 app.delete("/missoes/:id", (req, res) => {
     const indice = missoes.findIndex((p) => p.id === Number(req.params.id))
     if (indice === -1)
         return res.status(404).json({ erro: "missao não encontrada"})
     missoes.splice(indice, 1)
     res.status(204).send()
 })
 
app.get('/apod', async (req, res) => {
const {  } = req.query;
const url = ``;
try {
const resposta = await fetch(url);
const dados = await resposta.json();
res.status(200).json(dados.current);
} catch (erro) {
res.status(502).json({ erro: 'Falha ao consultar serviço de fotos' });
}
});

/**
* @openapi
* /missoes/endpoint:
*   get:
*     summary: Mostra os endpoints
*     parameters:
*       - in: path
*         name: id
*         required: false
*         schema:
*           type: integer
*     responses:
*/

app.get('/missoes/endpoint', (req, res) => {
const endpointMissoes = "Get /missoes, Get /missoes/{id}, Post /missoes, Put /missoes/{id}, Delete /missoes/{id}, Get /apod, Get /missoes/endpoint"

res.status(201).json(endpointMissoes)
})

export default app