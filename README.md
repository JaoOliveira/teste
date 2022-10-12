## TESTE BACK-END

## Parte 1
Criação de script para ler API JSON e popular o banco de dados:
O objetivo do teste é varrer uma API que retorna todas as universidades contidas em cada
país da lista fornecida e salvar estas informações no banco de dados.

## HOWTO 
 
Foi criado um script(API.js) para popular o MongoDb,
com a utilização do axios para coletar a API JSON juntamente com a conexão do banco e seu model.

## Parte 2
Criação de API REST para gestão das universidades cadastradas
O objetivo do teste é criar uma API que viabilize um CRUD (create, retrieve, update, delete)
das universidades anteriormente cadastradas no MongoDB.

## HOWTO

Para o CRUD precisamos criar uma conexão como o servidor (SERVER.js),
na pasta config foi feita a conexão com o banco de dados,
no controller, foi feita as validações com o YUP e algumas manuais.

