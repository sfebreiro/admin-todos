# Development
Pasos para levantar la app en desarrollo

1. Levantar la BBDD
```
docker compose up -d
```

2. Renombrar .env.template a .env
3. Reemplazar variables de entorno
4. Ejecutar el Seed para crear la BBDD local - localhost:3000/api/seed

# Prisma commands

```
npx prisma init
npx prisma migrate dev
npx prisma generate 
```
