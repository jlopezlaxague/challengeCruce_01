## Cruce Challenge

### RUN
```
go to "back" folder
npm intall
npm run seed
npm start
```

### ROUTES
_Obtener todos los usuarios_
```
GET
localhost:3000/api/users
```
_Obtener todos los usuarios según método de pago_
```
GET
localhost:3000/api/users?metodoDeFacturacion=VTEX
```
_Crear usuario_
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
_Obtener usuarios activos/inactivos_
```
GET
localhost:3000/api/users/activity
```
_Actualizar información de uno o más usuarios_
```
PUT
localhost:3000/api/users
[
 {"email": "foo@foo.com", "accountName": "FooCruce", "metodoDeFacturacion": "Prisma"},
 {"email": "bar@bar.com", "accountName": "BarCruce", "metodoDeFacturacion": "VTEX"}
]
```
_Obtener lista de órdenes VTEX_
```
GET
localhost:3000/api/orders
```
_Obtener lista de órdenes VTEX de varios usuarios_
```
POST
localhost:3000/api/orders
{
  "emails": ["matias@cruce.com", "franco@cruce.com", "flavio@cruce.com"]
}
```