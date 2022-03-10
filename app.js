


const venom = require('venom-bot');
const respuestas = require('./respuestas/respuestas.ts');



venom
  .create()
  .then((client) => start(client))
  .catch((erro) => {
    console.log(erro);
  });



  function start(client) {
    client.onMessage((message) => {
      
     respuestas.HolaMundo(message, client)
})
}
  