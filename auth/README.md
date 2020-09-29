# Auth

This is the **ticketing-app** authentication microservice. When a user successfully signs up or signs in using their credentials, a ***JSON Web Token*** is returned.

For a user to be able to access a protected route or resource, the client should send a JWT within the authorization headers.

## Tech stacks

- [NodeJS](https://nodejs.org/en/)
- [ExpressJS](https://expressjs.com/)
- [Docker](https://www.docker.com/)
- [MongoDB](https://www.mongodb.com/)

## Installation & Running the API

Follow the guidelines in this [README.md](https://github.com/mwinel/ticketing-app/blob/master/README.md) for enviroment set up and running your app.

## REST API

The REST API to the auth service is described below. You can test these endpoints using [postman](https://www.postman.com/downloads/).

### User Sign Up

**Request**

`POST api/v1/users/signup`

**Request Body**

```
{
    "email": "test@test.com",
    "password": "password"
}
```

**Response Body**

```
{
    "email": "test@test.com",
    "id": "5f73332f861ae60018319e54"
}
```

### User Sign In

**Request**

`POST api/v1/users/signin`

**Request Body**

```
{
    "email": "test@test.com",
    "password": "password"
}
```

**Response Body**

```
{
    "email": "test@test.com",
    "id": "5f73332f861ae60018319e54"
}
```

### Get Current User

**Request**

`GET api/v1/users/currentuser`

**Request Headers**

```
Content-Type: application/json
User-Agent: PostmanRuntime/7.26.5
Accept: */*
Postman-Token: 1d514d24-9863-44d1-b099-d5d1cea1e8bf
Host: ticketing.dev
Accept-Encoding: gzip, deflate, br
Connection: keep-alive
Cookie: express:sess=eyJqd3QiOiJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKcFpDSTZJalZtTnpKbE5qY3dPRFl4WVdVMk1EQXhPRE14T1dVMU1pSXNJbVZ0WVdsc0lqb2lkR1Z6ZEVCMFpYTjBMbU52YlNJc0ltbGhkQ0k2TVRZd01UTTROVFk0TTMwLm10eThuNzBicWpaV2wxWnZ6RlJiaVQ2X0lhOGZYR3B3NGtDTU9CLW1qMkUifQ=="
```

**Response Body**

```
{
    "currentUser": {
        "id": "5f72e670861ae60018319e52",
        "email": "test@test.com",
        "iat": 1601385683
    }
}
```

### User Sign Out

**Request**

`POST api/v1/users/signout`

**Response Body**

```
{}
```