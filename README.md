# Cruce Challenge
### RUN
```
go to "back" folder
npm intall
npm run seed
npm start
```
### ROUTES
*obtener todos los usuarios*
```
GET
localhost:3000/api/users

```
*Obtener todos los usuarios según método de pago*
```
GET
localhost:3000/api/users?metodoDeFacturacion=VTEX

```
*Crear usuario*
```
POST
localhost:3000/api/users
{
  "email": "foo@barexample.com",
  "password": "123",
  "accountName": "foo@barexample.com",
  "appKey": null,
  "appToken": null,
  "metodoDeFacturacion": "Prisma",
  "isActive": true
}
```
*Obtener usuarios activos/inactivos*
```
GET
localhost:3000/api/users/activity
```
*Actualizar información de uno o más usuarios*
```
PUT
localhost:3000/api/users
[
 {"email": "foo@foo.com", "accountName": "FooCruce", "metodoDeFacturacion": "Prisma"},
 {"email": "bar@bar.com", "accountName": "BarCruce", "metodoDeFacturacion": "VTEX"}
]
```

*Obtener lista de órdenes VTEX*
```
GET
localhost:3000/api/orders
```
*Obtener lista de órdenes VTEX de varios usuarios*
```
POST
localhost:3000/api/orders
{
  "emails": ["matias@cruce.com", "franco@cruce.com", "flavio@cruce.com"]
}
```


