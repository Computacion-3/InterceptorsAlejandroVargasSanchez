# Spring Boot App en Docker

Aplicación Spring Boot corriendo en el puerto **8080**.

##  Cómo ejecutar

### Opción 1: Docker Run

```bash
# Construir la imagen
docker build -t springboot-app .

# Ejecutar el contenedor
docker run -d -p 8080:8080 --name springboot-app springboot-app
```

### Opción 2: Docker Compose

```bash
# Iniciar el servicio
docker compose up -d --build
```

---
📍 **Probar endpoint:** [http://localhost:8080](http://localhost:8080)
