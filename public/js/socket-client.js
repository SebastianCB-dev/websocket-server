// Referencias del HTML
const lblOnline = document.querySelector('#lbl-online');
const lblOffline = document.querySelector('#lbl-offline');
const inputMessage = document.querySelector('#txt-message');
const btnSend = document.querySelector('#btn-enviar');

const socket = io('http://localhost:8080');


socket.on('connect', () => {
  lblOffline.style.display = 'none';
  lblOnline.style.display = '';
});

socket.on('disconnect', () => {
  lblOffline.style.display = '';
  lblOnline.style.display = 'none';
});

btnSend.addEventListener('click', () => {
  const mensaje = inputMessage.value;
  const payload = {
    mensaje,
    id: '123ABC',
    fecha: new Date().getTime()
  }
  socket.emit('send-message', payload, (id) => {
    console.log('Desde el server', id);
  });
});

socket.on('send-message', (payload) => {
  console.log('Desde el server: ', payload);
});