import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import usersRoutes from './features/users/users.routes';
import routinesRoutes from './features/routines/routines.routes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

// Registro de Módulos (Features)
app.use('/api/users', usersRoutes);
app.use('/api/routines', routinesRoutes);

app.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'API funcionando correctamente' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
