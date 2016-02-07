var mongojs = require('mongojs');

var databaseUrl = 'trips_mongojs';
var collections = ['trips'];

var connect = mongojs(databaseUrl, collections);

module.exports = {
    connect: connect
};