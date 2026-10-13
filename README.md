# ProvaDoGabriel

# 1-Identificação

Nome: Cauã Lopes Rooker
Curso: Informatica para Internet 2608 
Unidade curricular: Desenvolver Serviços Web

# 2-Descrição

Uma API para mostrar viagens espaciais concluidas, em processo e ate mesmo as que ainda estão planejadas

# 3-Tecnologias utilizadas

Node.js
Express
Swagger
JSON

# 4- Como clonar o projeto

Abra o repositorio no GitHub, depois abra o git bash
no git bash digite: "cd documents/" e de enter
clone o SSH
digite "git clone (SSH clonado)" e de enter
digite "cd (nome do repositorio)" e de enter
digite "code ." e de enter

# 5- Como instalar as dependencias

no vscode importe abra o terminal no modo bash e digite:
npm i "cors"
npm i "express"
npm i "jsdoc"
npm i "swagger"
npm i "swagger-ui-express"

# 6- Como executar o projeto

Digite "npm run dev" no terminal do vscode 
digite: "http://localhost:3000/espaco"+"rota"

# 7- Como executar os testes

# 8- Documentação dos Endpoints

URL: metodo GET "http://localhost:3000/espaco/missoes"
lista todas as missoes registradas
exemplo de resposta:

        "id": 1,
        "nome": "Apollo 11",
        "ano": "1969",
        "agencia": "NASA",
        "status": "concluida"

        "id": 2,
        "nome": "Voyager 1",
        "ano": "1977",
        "agencia": "NASA",
        "status": "Em operação"

        "id": 3,
        "nome": "Artemis II",
        "ano": "2026",
        "agencia": "NASA",
        "status": "planejada"

        "id": 4,
        "nome": "seris IV",
        "ano": "2017",
        "agencia": "NASA",
        "status": "concluida"

        "id": 5,
        "nome": "inges III",
        "ano": "1986",
        "agencia": "NASA",
        "status": "concluida"



URL:  medoto GET "http://localhost:3000/espaco/missoes/:ID"
Mostra uma missão especifica escolhida pelo ID
exemplo de requisição: "http://localhost:3000/espaco/missoes/:2"
exemplo de resposta: 
"id": 2,
"nome": "Voyager 1",
"ano": "1977",
"agencia": "NASA",
"status": "Em operação"



URL:  medoto POST "http://localhost:3000/espaco/missoes"
Registra uma missão
exemplo de resposta: 
(Missão criada)

URL:  medoto PUT "http://localhost:3000/espaco/missoes/:ID"
Modifica uma missão especifica escolhida pelo ID
exemplo de requisição: "http://localhost:3000/espaco/missoes/:2"
exemplo de resposta: 
(missão editada)


URL:  medoto DELETE "http://localhost:3000/espaco/missoes/:ID"
Deleta uma missão especifica escolhida pelo ID
exemplo de requisição: "http://localhost:3000/espaco/missoes/:2"
exemplo de resposta: 
(vazio)

URL:  medoto GET "http://localhost:3000/espaco/APOD"
Mostra imagens das missões
exemplo de resposta: 
(Lista de imagens)



# 9- Evidencias