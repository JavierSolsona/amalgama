# Exercise 2

## 1 Think about the best way to store this information in the browser. Code the solution using some state management strategy. Attach the code.

For this I will use redux toolkit, also with react-redux to as tool for the store managament, this is a very robust tool for manage store in a global way, have a global store is the best way to manage state in large applications.

Please check the files `store.js` and the `example.js`.
 

## 2 Attach in JSON format how the status is, according to what was raised in the previous point.

```json
{
  "authors": [
    {
      "id": 1,
      "name": "Uncle Bob"
    }
  ],
  "books": [
    {
      "id": 1,
      "title": "'Clean Code",
      "authorId": 1
    },
    {
      "id": 2,
      "title": "Clean Architecture'",
      "authorId": 1
    }
  ],
  "users": [
    {
      "id": 1,
      "email": "chano@amalgama.co",
      "nickname": "Chamo",
      "favorite_books": [
        {
            "bookId": 1,
            "favorited_at": "2024-01-01"
        }
      ]
    },
    {
      "id": 2,
      "email": "sebastian@amalgama.co",
      "nickname": "Biche",
      "favorite_books": [
        {
            "bookId": 1,
            "favorited_at": "2024-06-30"
        },
        {
            "bookId": 2,
            "favorited_at": "2024-12-31"
        }
      ]
    }
  ]
}
```

## 3 Explain the advantages of the proposed solution.

Redux is a widely used solution to manage state data with strong support also generate a global state that can be accecible in all component of the application that is the best way to manage states in large application because provide a single point where all the data is store and manage.

- Create a new instance authors will help to nor repeat the data and made more easy update the information in a single place if is need it.
- Remove the author for the books and use a key to the users will made more easy mantain the data and not repeat the information.
- Remove the book in the users and use a key to the books will made more easy mantain the data and not repeat the information.