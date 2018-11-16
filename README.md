# Backend Node clients and policies fake api

### Project structure


```diff
+ app
└───api
│   └───clients
│   └───middlewares
│   └───policies
└───config
└───models
└───tests
└───utils
+ postman
│  README.md
```

* api folder contains 3 folders: clients, middlewares and policies.
    * clients and policies have their own routes, controllers and services.
    * middlewares are the ones to handle if the user is authenticated or not (user has a token and it's a valid one) and if so they'll let them go to the next middleware (clientsMiddleware or policiesMiddleware) to check for permissions given a role users or admin.
* config folder has the environment variables and the server.
* models are a "mock" database in a js file with two users instantiated from a class User: Oriol & Jordi. Oriol is admin and Jordi has a users role.
* tests folder has integration tests instead of unit tests due to a lack of time to implement unit tests but they test all the workflow using the supertest library.
* utils folder has constants, error object and other utils.


### To run the project:

```
1) npm install
2) npm start
```
3) Then you can import the postman collections and the environment json to your postman to call the endpoints. 

You perhaps need to call the login collection admin-role or user-role endpoints to get a valid token and copy paste the token to the client or policies enpoint collection headers.

### To run the tests:
```
npm test
```