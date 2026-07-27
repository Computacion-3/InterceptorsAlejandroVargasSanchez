#!/bin/bash
set -e

NETWORK_NAME="app-network-manual"
DB_CONTAINER="postgres-manual"
BACKEND_CONTAINER="backend-manual"
FRONTEND_CONTAINER="frontend-manual"

echo "=========================================================="
echo " Despliegue Manual sin Docker Compose"
echo "=========================================================="

# 1. Crear la red de Docker si no existe
echo "1. Creando la red '$NETWORK_NAME'..."
if docker network inspect $NETWORK_NAME >/dev/null 2>&1; then
  echo "    -> Red '$NETWORK_NAME' ya existe."
else
  docker network create $NETWORK_NAME
  echo "    -> Red '$NETWORK_NAME' creada exitosamente."
fi

# 2. Construir la imagen del Backend (Spring Boot)
echo "2. Construyendo la imagen del Backend (Spring Boot)..."
docker build -t img-backend-manual ./backend

# 3. Construir la imagen del Frontend (React + Vite)
echo "3. Construyendo la imagen del Frontend (React + Vite)..."
docker build -t img-frontend-manual ./frontend

# 4. Eliminar contenedores previos si existen
echo "4. Limpiando contenedores anteriores si existen..."
docker rm -f $DB_CONTAINER $BACKEND_CONTAINER $FRONTEND_CONTAINER >/dev/null 2>&1 || true

# 5. Ejecutar contenedor de PostgreSQL
echo "5. Ejecutando contenedor de PostgreSQL ($DB_CONTAINER)..."
docker run -d \
  --name $DB_CONTAINER \
  --network $NETWORK_NAME \
  -e POSTGRES_DB=appdb \
  -e POSTGRES_USER=postgres \
  -e POSTGRES_PASSWORD=postgres \
  -p 5432:5432 \
  postgres:15-alpine

echo "Esperando 5 segundos a que PostgreSQL inicie completamente..."
sleep 5

# 6. Ejecutar contenedor del Backend (Spring Boot)
echo "6. Ejecutando contenedor del Backend ($BACKEND_CONTAINER)..."
docker run -d \
  --name $BACKEND_CONTAINER \
  --network $NETWORK_NAME \
  -e DB_HOST=$DB_CONTAINER \
  -e DB_PORT=5432 \
  -e DB_NAME=appdb \
  -e DB_USER=postgres \
  -e DB_PASSWORD=postgres \
  -p 8080:8080 \
  img-backend-manual

# 7. Ejecutar contenedor del Frontend (React + Vite)
echo "7. Ejecutando contenedor del Frontend ($FRONTEND_CONTAINER)..."
docker run -d \
  --name $FRONTEND_CONTAINER \
  --network $NETWORK_NAME \
  -e VITE_API_URL=http://localhost:8080 \
  -p 5173:5173 \
  img-frontend-manual

echo "=========================================================="
echo " Despliegue completado con éxito!"
echo " Frontend disponible en: http://localhost:5173"
echo " Backend disponible en: http://localhost:8080/api/products"
echo "=========================================================="
