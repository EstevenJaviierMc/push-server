module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define('Usuario', {
        username: {
            type: DataType.CITEXT,
            allowNull: false,
            unique: true
        },
        email: {
            type: DataType.CITEXT,
            allowNull: false,
            unique: true,
            validate: { isEmail: true }
        },
        password: {
            type: DataType.STRING,
            allowNull: false
        }
    });

    Usuario.associate = (models) => {
        // Usuario.belongsToMany(models.Rol, {
        //     through: 'RolesUsuario',
        //     foreignKey: {
        //         name: 'UsuarioId',
        //         allowNull: false
        //     }
        // });
    };

    return Usuario;
};