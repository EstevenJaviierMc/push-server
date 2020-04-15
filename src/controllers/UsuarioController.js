module.exports = app => {
    const { Usuario, Rol } = app.config.db.models;

    const crearUsuario = async (req, res) => {
        // const { email, username, password } = req.body;

        // if (email || username || password) {
        //     return res.status(400).json({ message: 'Campos email, usename y password son requeridos.' });
        // }

        try {
            // const usuario = await Usuario.findOne({ where: { email: 'a@a.com' } });
            // const rol = await Rol.findOne({ where: { nombre: 'admin' } });

            // const RolesUsuario = await usuario.addRol(rol);

            const d = await Usuario.findAll({
                include: { model: Rol, attributes: ['nombre'] },
                attributes: ['username']
            })

            res.status(200).json(d);

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