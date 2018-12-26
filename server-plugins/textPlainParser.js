const fp = require('fastify-plugin');
function parser(req, done) {
  let body = '';
  req.on('error', done);
  req.on('data', (data) => { body = body + data; });
  req.on('end', () => { return done(body); });
}
function plugin(fastify, opts, next) {
  fastify.addContentTypeParser('text/plain', parser);
  next();
}

module.exports = fp(plugin, '>=0.15.0');
