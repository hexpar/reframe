const Hapi = require('hapi');
const config = require('@brillout/reconfig').getConfig({configFileName: 'reframe.config.js'});
const {symbolSuccess, colorEmphasis} = require('@brillout/cli-theme');
const {HapiPlugin} = require('./api');
const knex = require('../db/setup');

module.exports = start();

async function start() {
    const server = Hapi.Server({
        port: process.env.PORT || 3000,
        debug: {request: ['internal']},
    });

    // Run `$ reframe eject server-integration` to eject the integration plugin.
    await server.register(config.hapiIntegrationPlugin);
    await server.register(HapiPlugin);

    server.ext('onPostStop', () => knex.destroy());

    await server.start();

    const env = colorEmphasis(process.env.NODE_ENV||'development');
    console.log(symbolSuccess+'Server running (for '+env+')');

    return server;
}
