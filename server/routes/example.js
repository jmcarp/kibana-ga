export default function (server) {

  server.route({
    path: '/api/google_analytics/example',
    method: 'GET',
    handler(req, reply) {
      reply({ time: (new Date()).toISOString() });
    }
  });

};
