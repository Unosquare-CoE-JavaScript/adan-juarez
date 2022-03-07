// to detect loaded this file global
jest.setTimeout(30000); //depends on the performance of the machine we are working on
// tHIS RESOLVE the Async callback was not invoked within the 500ms

require('../models/User');

// connect mongoose with all jest runs
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI, { useMongoClient: true });