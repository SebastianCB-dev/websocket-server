
const socketController = (socket) => {
  socket.on('disconnect', () => {
    // console.log('Cliente desconectado');
  });

  socket.on('send-message', (payload, callback) => {
    // TODOS LOS CLIENTES CONECTADOS
    const id = 123456;
    socket.broadcast.emit('send-message', id);
    // callback(id);

  });
}

module.exports = {
  socketController
}