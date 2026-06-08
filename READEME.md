# Modulos:

## Routes 
Define las rutas HTTP

### Responsabilidad
    -Definir endpoints
    -Aplica middlewares
    -Llamar al controller

**no debe contener logica del negocio**

## Controllers (controladores)
Recibe las request y devuelve las response

### Responsabilidad
    -Leer req.body, re.query y req.params
    -Llamar al service
    -Devuelve respuesta HTTP

**no debe contener logica de negocio compleja**

## Services 
Acá vive la logica del negocio

## Responsabilidad
    -Valicadion del negocio
    -Reglas del negocio
    -Coordinacion entre repositorios
    -Llamada a APIs externas

## Repository
Se encarga de comunicarse con la base de dato


### Responsabilidad
    -Queries SQL
    -(PRISMA)
    -(MONGOOSE)
    

instalar : dotenv, jsonwebtoken, bcrypt para poryecto picadito
Mirar en pagina: 



@@map("usuarios") <--- cambiar nommbre de tabla
// Prisma: crear modelos que esten relaciones de 1..n y de n..n (4 modelos)