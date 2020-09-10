# crud-products
CRUD para gerenciamento de produtos,com as opções de listar,remover,atualizar e cadastrar um novo produto,a api esta disponivel em 2 versões uma utilizando o banco SQL postgresql e outra utilizando um NoSql mongodb

## Rotas da aplicação

### Retonar todos os produtos cadastrados
``GET - http://localhost:3333/products``
### Retornar um unico produto atraveis do ID
``GET - http://localhost:3333/product/:id``
### Cadastrar um novo produto
``POST - http://localhost:3333/products``
### Atualizar um produto
``PUT - http://localhost:3333/products``
### Deletar todos os produtos
``DELETE - http://localhost:3333/products``
### Deletar um unico produto
``DELETE - http://localhost:3333/product/:id``

## Utilização do CRUD
Para utilizar o programa é bem simples,segue os comandos

### Primeiro clone o repositorio
``git clone https://github.com/DKSecurity99/crud-products.git``

### Em seguida basta entrar na pasta do projeto

``cd crud-products``

### Logo após você escolher qual dos bancos utilizar faça o seguite

``yarn install``
ou
``npm install``

### Quando o processo terminar,incie o projeto e tambem seu banco de dados Mongo ou Postgresql

``yarn dev``
ou
``npm dev``
