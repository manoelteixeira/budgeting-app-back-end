# Budgeting App Back-end
This is a back-end application for a simple bugeting app.

## Instalation And Setup
1. **Fork** and **Clone** this repository
2. Create a **.env** file with `echo "PORT=<port number>" > .env` to set the port in which the server will listen for requests.
3. Install project dependencies with `npm install`
4. Run the server with `npm run listen` or, If **nodemon** is istalled, use `npm start`

## Endpoints
|  #  | Action  |        URL        | HTTP Verb |    CRUD    |                  Description                   |
| :-: | :-----: | :---------------: | :-------: | :--------: | :--------------------------------------------: |
|  1  |  Index  |   /transactions   |    GET    |  **R**ead  |   Get a list of all transactions    |
|  2  |  Show   | /transactions/:id |    GET    |  **R**ead  | Get an individual view (show one transactions) |
|  3  | Create  |   /transactions   |   POST    | **C**reate |           Create a new transactions            |
|  4  | Destroy | /transactions/:id |  DELETE   | **D**elete |             Delete a transactions              |
|  5  | Update  | /transactions/:id |    PUT    | **U**pdate |             Update a transactions              |


## Transaction Data
- `id` : **String** - 10 digint unique 
- `item_name` : **String** - the name of the transaction (ie: income, savings, cat food, etc.)
- `amount` : **Number** - the amount of the transaction
- `date` : **String** - the date when the transaction was made
- `from` : **String** - who this transaction was with (ie. employer, bank, pet store, grocery store, etc
- `category` : **String** - what category does this fall into (income, savings, pets, food, etc)

