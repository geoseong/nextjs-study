const express = require('express');
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const port = parseInt(process.env.PORT, 10) || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

function createServer(event) {
  console.log('----event----\n', event);
  const server = express();
  // add middleware, custom routing, whatever
  server.get('/'+event.pathParameters.addr, async (req, res) => {
    try {
      ['one', 'two', 'three', 'four', 'five'].forEach((data, idx) => {
        if (event.pathParameters.addr !== data) {
          res.set({
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
          })
          res.status(500).send({message: '렌더링에 실패하였습니다.'})
        }
      });
      const renderer = await app.render(req, res, '/'+event.pathParameters.addr, req.query)
      res.send(renderer)
    } catch(e) {
      res.set({
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      })
      res.status(500).send({message: '렌더링에 실패하였습니다.'})
    }
  });
  
  server.get('*', (req, res) => handle(req, res));
  return server;
}

module.exports = {
  createServer: createServer, app: app
}

// if (process.env.IN_LAMBDA) {
//   // module.exports = createServer();
//   module.exports = createServer;
// } else {
//   app.prepare().then(() => {
//     // const server = createServer();
//     // server.listen(port);
//   });
// }