module.exports = (sequelize, DataType) => {
    const Rol = sequelize.define('Rol', {
        nombre: {
            type: DataType.CITEXT,
            allowNull: false,
            unique: true
        }
    }, {
        tableName: 'Roles',
    });

    Rol.associate = (models) => {
        Rol.belongsToMany(models.Usuario, {
            through: 'RolesUsuario',
            foreignKey: {
                name: 'UsuarioId',
                allowNull: false
            }
        });
    };

    return Rol;
};