module.exports = app => {
    const { crearUsuario } = app.controllers.UsuarioController;
    app.get('/usuarios', (req, res) => {
        crearUsuario(req, res);
    })
}