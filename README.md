# Тестовое задание #

### 1. Билеты на событие ###

Можно добавить таблицы с билетами и типами билетов для добавления необходимых типов
![Scheme](scheme.jpg)

Orders
id  | event_id  | event_date          | equal_price  | created
--- | --------- | ------------------- | ------------ | -------------------
1   | 003       | 2021-08-21 13:00:00 | 700          | 2021-01-11 13:22:09
2   | 006       | 2021-07-29 18:00:00 | 1600         | 2021-01-12 16:62:08
3   | 003       | 2021-08-15 17:00:00 | 4150         | 2021-01-13 10:08:45

Ticket
id  | type_id   | order_id            | barcode   
--- | --------- | ------------------- | --------   
1   | 003       | 002                 | 11111111   
2   | 006       | 003                 | 22222222   
3   | 003       | 001                 | 33333333   

Ticket types
id  | type (name)  | price   
--- | ------------ | --------   
1   | adult        | 700   
2   | kid          | 450   
3   | adult        | 1000
3   | preferential | 600
3   | group        | 650


