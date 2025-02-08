# API DOCS
### Aim
Build a simple Currency Conversion API using an external exchange rate API. Start with an ongoing project (version 1.0). This will test your ability to integrate a third-party service, handle simple backend logic, and create endpoints to return currency conversion data.

### Endpoints

* For REST API:
```https
[GET] /api/rest/:from/:to/:amount

# :from - Source currency
# :to - Target currency
# :amount - Amount to be converted
```
```https
[POST] /api/rest/convert

# body:
# from - Source currency
# to - Target currency
# amount - Amount to be converted
```

* For GraphQL API:
```graphql
mutation Convert {
    convert(convert_input: { from: "USD", to: "INR", amount: 200 }) {
        conversion
        from
        to
    }
}
```

* For Websocket API:
link localhost:3000
```json
{
    "from": "USD",
    "to": "INR",
    "amount": 500
}
```

Response:
```json
{
    "conversion": 43838.55,
    "from": "USD",
    "to": "INR"
}

Acknowledgment:
```json
{
    "status": "success",
    "message": "Conversion successful"
}
```

## External API use 
https://www.exchangerate-api.com/

## .env variable

API_KEY

### Setup for NestJS Node

0. **clone**
    ```bash
    git clone https://github.com/Paragkoche/Currency-convter.git
    ```

1. **Navigate to the project directory:**
    ```bash
    cd Currency-convter
    ```

2. **Install required dependencies:**
    ```bash
    npm install 
    ```
