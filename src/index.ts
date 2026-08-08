import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { db } from './config/connectionDB';
import { usersRoutes, routinesRoutes } from './features';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api/users', usersRoutes);
app.use('/api/routines', routinesRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'API funcionando correctamente' });
});

db.then(() => {
    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
})
.catch((error) => {
    console.error("Error al conectar a la base de datos:", error);
    process.exit(1);
});
