
const venom = require('venom-bot');
const lista = [{nombre:"0scar"},{cumple:"mi cumpleaños es 14/9"}];

function HolaMundo(mensaje, client)
{
    if (mensaje.body.toUpperCase()  === 'HOLA' && mensaje.isGroupMsg === false) {
client.sendText
(mensaje.from, 
  'Bienvenido al chat bot de DOE si queres saber mi nombre envia 1, si queres saber mi cumpleaños 2, si queres una foto 3').
then((result) => {console.log('Result: ', result); //return object success
})
.catch((erro) => {
  console.error('Error when sending: ', erro); //return object error
  });
}else if(mensaje.body=== '1' && mensaje.isGroupMsg===false){
  client.sendText(mensaje.from,lista[0].nombre).then((result) => {console.log('Result: ', result); //return object success
})
.catch((erro) => {
  console.error('Error when sending: ', erro); //return object error
  });
}
else if(mensaje.body==='2' && mensaje.isGroupMsg===false){
  {
    client.sendText(mensaje.from, lista[1].cumple).then((result) => {console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
    });
}
}
else if(mensaje.body==='3' && mensaje.isGroupMsg===false){
client.sendImage(
    mensaje.from,
    './img/index.jpg',
    'planeta',
    'Una imagen'
  )
  .then((result) => {
    console.log('Result: ', result); //return object success
  })
  .catch((erro) => {
    console.error('Error when sending: ', erro); //return object error
  });
}
}
module.exports = {HolaMundo};