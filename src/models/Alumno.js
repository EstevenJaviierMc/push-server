module.exports = (sequelize, DataType) => {
    const Alumno = sequelize.define('Alumno', {
        nombre: {
            type: DataType.CITEXT,
            allowNull: false
        }
    });

    Alumno.associate = (models) => {
        // Alumno.belongsToMany(models.Rol, {
        //     through: 'RolesAlumno',
        //     foreignKey: {
        //         name: 'AlumnoId',
        //         allowNull: false
        //     }
        // });
    };

    return Alumno;
};