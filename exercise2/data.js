export const APIBooks = [
    {
        "id": 1,
        "title": "'Clean Code",
        "author": {
        "id": 1,
        "name": "Uncle Bob"
        }
    },
    {
        "id": 2,
        "title": "Clean Architecture'",
        "author": {
        "id": 1,
        "name": "Uncle Bob"
        }
    }
];

export const APIUsers = [
    {
        "id": 1,
        "email": "chano@amalgama.co",
        "nickname": "Chamo",
        "favorite_books": [
        {
            "id": 1,
            "title": "'Clean Code",
            "favorited_at": "2024-01-01",
            "author": {
                "id": 1,
                "name": "Uncle Bob"
            }
        }
        ]
    },
    {
        "id": 2,
        "email": "sebastian@amalgama.co",
        "nickname": "Biche",
        "favorite_books": [
        {
            "id": 1,
            "title": "'Clean Code",
            "favorited_at": "2024-06-30",
            "author": {
                "id": 1,
                "name": "Uncle Bob"
            }
        },
        {
            "id": 2,
            "title": "Clean Architecture'",
            "favorited_at": "2024-12-31",
            "author": {
                "id": 1,
                "name": "Uncle Bob"
            }
        }
        ]
    }
];