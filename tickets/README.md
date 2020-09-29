# Tickets

This is the **ticketing-app** tickets microservice. A user can create a ticket, retrieve a ticket given its `id`, retrieve a list of tickets and update a ticket given its `id`.

## Tech stacks

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation & Running the API

Follow the guidelines in this [README.md](https://github.com/mwinel/ticketing-app/blob/master/README.md) for enviroment set up and running your app.

## REST API

The REST API to the tickets service is described below. You can test these endpoints using [postman](https://www.postman.com/downloads/).

### Create Ticket

**Request**

`POST api/v1/tickets`

**Request Body**

```
{
    "title": "cindys concert",
    "price": 230.98
}
```

**Response Body**

```
{
    "title": "cindys concert",
    "price": 230.98,
    "userId": "5f7377b1195fd30018268622",
    "id": "5f7377e224f93b0018e9a5d9"
}
```

### Retrieve Tickets

**Request**

`GET api/v1/tickets`

**Response Body**

```
[
    {
        "title": "Cindys Concert",
        "price": 500.88,
        "userId": "5f7377b1195fd30018268622",
        "id": "5f7377e224f93b0018e9a5d9"
    },
    {
        "title": "johns concert",
        "price": 230.98,
        "userId": "5f7377b1195fd30018268622",
        "id": "5f737ad77dec92001800d4e5"
    }
]
```

### Retrieve Ticket

**Request**

`GET api/v1/tickets/<ticked-id>`

**Response Body**

```
{
    "title": "Cindys Concert",
    "price": 500.88,
    "userId": "5f7377b1195fd30018268622",
    "id": "5f7377e224f93b0018e9a5d9"
}
```

### Update Ticket

**Request**

`POST api/v1/tickets/<ticket-id>`

**Request Body**

```
{
    "title": "cindys concert",
    "price": 430.98
}
```

**Response Body**

```
{
    "title": "cindys concert",
    "price": 230.98,
    "userId": "5f7377b1195fd30018268622",
    "id": "5f7377e224f93b0018e9a5d9"
}
```