# Typescript

## Comandos de interés

Instalación global
```bash
npm install -g typescript
```

Instalación por proyecto 
```bash
npm install --save-dev typescript
```

Generación del tsconfig
```bash
npx tsc --init
```

Adición del comando tsc en `package.json`
```json
{
  "scripts": {
    "tsc": "tsc"
  }
}
```