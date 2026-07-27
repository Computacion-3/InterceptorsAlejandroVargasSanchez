# 3-docker-compose-without

Este proyecto demuestra el despliegue manual (sin Docker Compose) de una aplicación de 3 capas:
1. Frontend: React + Vite (Puerto 5173)
2. Backend: Spring Boot + Spring Data JPA (Puerto 8080)
3. Base de Datos: PostgreSQL 15 (Puerto 5432)

---

## Ejecución mediante Script Manual (`docker.sh`)

Para ejecutar la construcción de imágenes, creación de red de docker e inicio de contenedores manualmente:

```bash
chmod +x docker.sh
./docker.sh
```

### ¿Qué realiza `docker.sh` manualmente?
1. Crea la red personalizada de Docker: `docker network create app-network-manual`
2. Construye la imagen del backend: `docker build -t img-backend-manual ./backend`
3. Construye la imagen del frontend: `docker build -t img-frontend-manual ./frontend`
4. Ejecuta el contenedor de PostgreSQL conectado a la red.
5. Ejecuta el contenedor de Spring Boot indicándole la variable de entorno `DB_HOST=postgres-manual`.
6. Ejecuta el contenedor de React + Vite exponiendo el puerto 5173.
