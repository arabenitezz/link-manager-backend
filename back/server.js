const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const linkRoutes = require('./routes/links');
const commentRoutes = require('./routes/comments');

const app = express();

// Middlewares
app.use(cors({
  origin: [
    'https://link-manager-vanilla-js.vercel.app',
    'https://link-manager-vue.vercel.app',
    'https://link-manager-svelte.vercel.app',
    'https://link-manager-alpine-js.vercel.app',
    'https://link-manager-react.vercel.app',
    'https://link-manager-angular.netlify.app'
  ],
  methods: ['GET', 'POST', 'PATCH', 'DELETE'],
  credentials: true,
  allowedHeaders: ['Content-Type', 'Authorization','X-Requested-With', 'Accept']
}));

app.use(express.json());

// Middleware para logging de peticiones
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});

// Rutas
app.use('/api/links', linkRoutes);
app.use('/api/comments', commentRoutes);

// Manejador de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Error interno del servidor' });
});

// Conexión a MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Puerto
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
