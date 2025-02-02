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