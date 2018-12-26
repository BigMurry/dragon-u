const Fastify = require('fastify');
const Next = require('next');

const port = parseInt(process.env.PORT, 10) || 8001;
const dev = process.env.NODE_ENV !== 'production';
const app = Next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const fastify = Fastify();
  fastify.register(require('./server-plugins/textPlainParser'));
  fastify.register(require('fastify-formbody'));
  fastify
    .get('/*', (request, reply) => {
      return handle(request.req, reply.res);
    })
  ;
  fastify.listen(port, err => {
    if (err) throw err;
    console.log(`running at ${dev ? 'develop mode' : 'production mode'}.`);
    console.log(`ui on: http://localhost:${port}`);
  });
});
