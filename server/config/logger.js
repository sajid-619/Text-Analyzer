const { createLogger, transports, format } = require('winston');
const { ElasticsearchTransport } = require('winston-elasticsearch');

const esTransportOpts = {
  level: 'info',
  clientOpts: { node: 'http://localhost:9200' } // Elasticsearch node
};

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json()
  ),
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'logfile.log' }),
    new ElasticsearchTransport(esTransportOpts)
  ]
});

module.exports = logger;
