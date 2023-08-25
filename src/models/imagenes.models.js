const { sequelize, DataTypes } = require('../../db')


const imagenes = sequelize.define('imagenes', {
    id: {
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    imageURL: {
        type: DataTypes.STRING,
        allowNull: false
    },
    public_id: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'imagenes'
})



imagenes.sync({ force: false }).then(() => {
    console.log('Tabla de Reservas creada');
});


module.exports = imagenes;