# 4-docker-compose

Este proyecto demuestra el despliegue multi-contenedor utilizando Docker Compose para una aplicación de 3 capas:
1. Frontend: React + Vite (Puerto 5173)
2. Backend: Spring Boot + Spring Data JPA (Puerto 8080)
3. Base de Datos: PostgreSQL 15 (Puerto 5432)

---

## Despliegue con Docker Compose (Estándar)

Para iniciar todos los servicios con la configuración estándar (`docker-compose.yml`):

```bash
docker compose up --build
```

O en segundo plano:

```bash
docker compose up -d --build
```

---

## Despliegue en Desarrollo con Variables de Entorno (`docker-compose-dev.yml`)

Para ejecutar la versión de desarrollo que carga las variables dinámicas desde el archivo `.env`:

```bash
docker compose -f docker-compose-dev.yml up --build
```

O en segundo plano:

```bash
docker compose -f docker-compose-dev.yml up -d --build
```

### Detener y Limpiar el Entorno Dev

```bash
docker compose -f docker-compose-dev.yml down
```

Para eliminar los volúmenes persistentes de desarrollo:

```bash
docker compose -f docker-compose-dev.yml down -v
```

---

## URLs de Acceso

- Frontend: http://localhost:5173
- Backend API: http://localhost:8080/api/products
- PostgreSQL: localhost:5432 (Usuario: postgres, Password: postgres, DB: appdb)
