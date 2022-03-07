const mongoose = require('mongoose');
const redis = require('redis');
const util = require('util');
const keys = require('../config/keys');

const client = redis.createClient(keys.REDIS_URL);

client.hget = util.promisify(client.hget);
// stores a references to the original function everytime is executed
// returns mongoose document
const exec = mongoose.Query.prototype.exec;
                                 // function assign to the prototype function
mongoose.Query.prototype.cache = function(options = {}) {
  //console.log('IM ABOUT TO RUN A QUERY')
  //
  //return exec.apply(this, arguments)

  //A reference to the query that I am trying to execute
  //console.log(this.getQuery())
  //onsole.log(this.mongooseCollection.name)
  

  this.useCache = true;
  // top level hashkey
  this.hashKey = JSON.stringify(options.key || ''); // object or ('') not passing a key
 
  return this; // return the function itself
};

mongoose.Query.prototype.exec = async function() {
  // this.useCache = true
  if (!this.useCache) {
    return exec.apply(this, arguments);
  }

  //convert to not a simple JS plain object
  const key = JSON.stringify(
    
    //make a copy of the object and assign it the collection
    Object.assign({}, this.getQuery(), {
      collection: this.mongooseCollection.name
    })
  );

  // See if we have a value for 'key' in redis
  const cacheValue = await client.hget(this.hashKey, key);
  
  // If we do, return that
  if (cacheValue) {
    //
    // 
    const doc = JSON.parse(cacheValue);

    //hydratin arrays
    // the case we resolve with an array and with a simple plain object
    return Array.isArray(doc)
      ? doc.map(d => new this.model(d)) // dealing with an array
      : new this.model(doc); // dealing with object
  }

  // Otherwise, issue the query and store the result in redis
  const result = await exec.apply(this, arguments);
  //  client.set(key, JSON.stringify(result), 'EX', 10);
  // 
  client.hset(this.hashKey, key, JSON.stringify(result), 'EX', 10);
   
  return result;
  //console.log(result)
};

// 
module.exports = {
  clearHash(hashKey) {
    // delete inside redis with the association key use '.del' method
    client.del(JSON.stringify(hashKey));
  }
};