module.exports = (sequelize, DataType) => {
    const Docente = sequelize.define('Docente', {
        nombre: {
            type: DataType.CITEXT,
            allowNull: false
        }
    });

    Docente.associate = (models) => {
        // Docente.belongsToMany(models.Rol, {
        //     through: 'RolesDocente',
        //     foreignKey: {
        //         name: 'DocenteId',
        //         allowNull: false
        //     }
        // });
    };

    return Docente;
};