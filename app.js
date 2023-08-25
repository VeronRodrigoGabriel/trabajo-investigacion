const express = require('express');
const morgan = require('morgan');
const multer = require('multer');
const path = require('path');
require('dotenv').config()
require('ejs')


const app = express()
const PORT = process.env.PORT

//configuracion
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//middleware
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const storage = multer.diskStorage({
    destination: path.join(__dirname, 'public/uploads'),
    filename: (req, file, cb) => {
        cb(null, new Date().getTime() + path.extname(file.originalname));
    }
});
app.use(multer({ storage: storage }).single('image'));

//Base de datos
const { sequelize } = require("./db")
sequelize.authenticate()
    .then(() => console.log("Base de datos  conectada"))
    .catch((error) => {
        console.log(error);
        process.exit()
    });

//Rutas
app.use(require('./src/routes/index'))

app.listen(PORT, () => console.log('Server on port', PORT));