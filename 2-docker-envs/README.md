# Express App con Variables de Entorno en Docker

Aplicación sencilla en Express que saluda dinámicamente según la variable de entorno `WHO`.

## Cómo ejecutar

### 1. Construir la imagen
```bash
docker build -t express-envs-app .
```

### 2. Ejecutar pasando la variable de entorno (`-e`)

```bash
docker run -d -p 8080:8080 -e WHO="Kevin!" --name express-app express-envs-app
```

---
**Probar:** Accede a `http://localhost:8080` o ejecuta `curl http://localhost:8080` (retornará `Hello Kevin!. Wish you were here.`).
