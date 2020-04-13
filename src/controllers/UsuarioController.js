module.exports = app => {
    const { Usuario, Rol, RolesUsuario } = app.config.db.models;

    const crearUsuario = async (req, res) => {
        // const { email, username, password } = req.body;

        // if (email || username || password) {
        //     return res.status(400).json({ message: 'Campos email, usename y password son requeridos.' });
        // }

        try {
            const usuario = await Usuario.findOne({ where: { username: 'Estevenjaviier' } });
            const rol = await Rol.findOne({ where: { nombre: 'estudiante' } });

            const RolesUsuario = await usuario.addRol(rol);

            res.status(201).json(RolesUsuario);

        } catch (err) {
            console.log(err);

            res.status(500).json({
                message: 'Se explotó...',
                err: err.message
            })
        }
    }

    return { crearUsuario }
}