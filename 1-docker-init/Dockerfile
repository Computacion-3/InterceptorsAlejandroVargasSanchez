# Etapa 1: Build de la aplicación con Maven
FROM maven:3.9.8-eclipse-temurin-17-alpine AS build
WORKDIR /app

# Copiar configuración de dependencias y descargar en caché
COPY pom.xml .
RUN mvn dependency:go-offline -B

# Copiar el código fuente y compilar el paquete JAR
COPY src ./src
RUN mvn package -DskipTests

# Etapa 2: Imagen liviana de ejecución
FROM eclipse-temurin:17-jre-alpine
WORKDIR /app

# Copiar el artifact JAR generado desde la etapa de compilación
COPY --from=build /app/target/*.jar app.jar

# Exponer el puerto 8080
EXPOSE 8080

# Comando para ejecutar la aplicación
ENTRYPOINT ["java", "-jar", "app.jar"]
