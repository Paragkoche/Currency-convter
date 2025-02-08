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
mutation ConvertCurrency($from: String!, $to: String!, $amount: Float!) {
    convertCurrency(convert_input: { from: $from, to: $to, amount: $amount }) {
        conversion
        from
        to
    }
}
```


## external API use 
https://www.exchangerate-api.com/


## .env variable

API_KEY
