# Exercice 3

## Instructions

For the next endpoint and credentrials 

```
https://2v234d7xc7.execute-api.us-east-1.amazonaws.com/default/login [POST]

email: user@amalgama.co
password: password
```

Possible errors `Status Code 401 Unauthorized.`

### Note:The endoint not accept JSON, use application/x-www-form-urlencoded or multipart/form-data.

## Specifications

### 1 Create a login and password view and handler the possible error

### 2 After login the user access to priovade pages on the application

- If the user is not login, only can access to the private view
- If the user is login and try to access the login is automatically redirect to the private view

## Requirements

* docker >= 27.5.1
* Available ports 3000

In the 3000 port the app will be running. To access go to http://localhost:3000/

## Move to the folder

To use the next command in this file you need to move to the application folder, the app folder next to this file

## Environment creation

```sh
docker compose build
```

## Run the application

```sh
docker compose up
```

## How test the application

- Go to the login page (http://localhost:3000/login) and use the credentials.
- If there is an error you will see a red line in the form
- After a success login the page willr edirect to the private view (http://localhost:3000/)
- In the private view there is a button call `Return to login view`, this way you can test the app redirect again to the home page if the user is login.
- In the private view there is a button call `Logout`, this way you can ermove the token and access to the login page.


## Turn off the application

```sh
docker compose down
```

## Thing to impove

- Use a tool like redux persist this way the token is not lose when the page refresh or reload
- Move the API call to a different folder, this way all the calls can be on the same folder and it is better to scale the app
- Improve the error managament
- Imporve the UI