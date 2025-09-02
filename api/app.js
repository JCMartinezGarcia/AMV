var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const authRoutes = require('./routes/authRoutes');
var indexRouter = require('./routes/index');
const cors = require('cors');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// Configuración de CORS
app.use(cors({
    origin: 'http://localhost:5173', // Permitir solo este origen
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Métodos permitidos
    credentials: false // Si necesitas enviar cookies o autenticación
}));
app.use('/', indexRouter);
app.use('/api/auth', authRoutes);


module.exports = app;
