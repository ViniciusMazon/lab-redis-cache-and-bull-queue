# Sobre o projeto
Foi desenvolvido uma simples API de doações com o intuito de estudar filas e cache utilizando o redis.
O endpoint `/api/v1/donations.donate` registra a doação na tabela `transactions` e atualiza valor de `amount` na tabela `donations` pegando o valor atual e somando com o valor da nova doação. Caso esse endpoint não enfilerasse as requests, no caso de muitas requests, o valor amount seria registrado de forma incorreta.

O endpoint `/api/v1/donations.transactions/:donationId?limit=10&offset=0` lista todas transações referentes a uma campanha de doação. A mesma está paginada e suas informações são mantidas em cache por um curto período de tempo.

# Dependências

[express](https://expressjs.com/pt-br/)

[postgres](https://www.postgresql.org/)

[redis](https://redis.io/)

[ioredis](https://www.npmjs.com/package/ioredis)

[bull](https://www.npmjs.com/package/bull)

[artillhey](https://www.artillery.io/)

# Scripts

`dev`: sobre a API

`artillhey`: roda o teste de carga onde 100 request serão feitas durante 10 segundos.
# Como utilizar

1 - instale as dependências `npm ci`

2 - suba os containers `docker-compose up`

3 - rode as queries do diretório `src/data/pg/queries/*.sql`

4 - crie a campanha de doação no endpoint `api/v1/donations.donation`

5 - realize doações pelo endpoint `api/v1/donations.donate` ou rode o script `artillhey` para realizar 500 request em simultâneo

6 - no endpoint `/api/v1/donations/:donationId` o valor de amount estará correto

7 - ao chamar o endpoint `api/v1/donations.transactions/:donationId?limit=10&offset=0` a informação `meta.chached` virá como false, ao chamar novamente deve-se notar uma response mais rápida com a informação de `meta.cached` true.
