import http from 'http';
import SocketIo from 'socket.io'

module.exports = app => {
    const server = http.createServer(app);
    const io = SocketIo(server);

    const { sequelize } = app.config.db;
    const { APP_PORT } = process.env;

    sequelize.sync({ force: false }).then(() => {
        io.on('connection', (socket) => {
            console.log(`a user connected: ${socket.id}`);

            socket.on('disconnect', () => {
                console.log(`a user disconnected: ${socket.id}`);
            });
        });

        server.listen(APP_PORT, () => {
            console.log(`Listening on port: ${APP_PORT}`);
        });
    }).catch(error => {
        console.log(error);
    });

    return { io }
}