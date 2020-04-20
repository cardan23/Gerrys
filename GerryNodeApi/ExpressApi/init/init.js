
process.env["NODE_CONFIG_DIR"] = "../config";

const config = require('config');

const initDatabase = require('../../MongoDB/Connection/connection');

//TODO: Pass user and password string for mongodb authentication
initDatabase(config.get('database'));
