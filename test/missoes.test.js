const request = require("supertest")
const app = require("../index")


Test("POST /´missoes cria uma nova missao", async () => {
    const resposta = await request(app).post("/missoes").send(
        {
            "nome": "Aries 3",
            "ano": "1976",
            "agencia": "NASA",
            "status": "concluida"
        }
    )
    expect(resposta.status).toBe(201)
    expect(resposta.body.nome).toBe("Aries 3")
    expect(resposta.body.ano).toBe("1976")
    expect(resposta.body.agencia).toBe("NASA")
    expect(resposta.body.status).toBe("concluida")
})
