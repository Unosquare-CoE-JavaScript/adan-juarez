const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const cleanCache = require('../middlewares/cleanCache');
const { clearHash } = require('../services/cache');

const Blog = mongoose.model('Blog');

module.exports = app => {
  app.get('/api/blogs/:id', requireLogin, async (req, res) => {
    try {
      const blog = await Blog.findOne({
        _user: req.user.id,
        _id: req.params.id
      });

      res.send(blog);
    } catch (err) {
      console.log(err)
    }
  });

  app.get('/api/blogs', requireLogin, async (req, res) => {
    try {
      //allows all users to retrieve cache post blog
      const blogs = await Blog.find({ _user: req.user.id }).cache({
        key: req.user.id
      })

      res.send(blogs)
    } catch (err) {
      console.log(err)
    }
  });

  app.post('/api/blogs', requireLogin, cleanCache, async (req, res, next) => {
    const { title, content, imageUrl } = req.body;

    const blog = new Blog({
      imageUrl,
      title,
      content,
      _user: req.user.id
    });

    // save and send the response to the user
    try {
      await blog.save();
      res.send(blog);
    } catch (err) {
      res.send(400, err);
    }
    // clear cache
    cleanHash(req.user.id)
  });
};

/* 
  First intent, not very performance and not the best option to get performance

  app.get('/api/blogs', requireLogin, async (req, res) => {
    //require the redis lbrary
    const redis = require('redis')
    const redisUrl = 'redis://127.0.0.1:6379'
    const client = redis.createClient(redisUrl)
    //standar module node contains, it includes promisify to return a promise with any function
    const util = require('util')
    //referen to the function, instead of use a callback we use a pormise 
    client.get = util.promisify(client.get)
    // Paso 1: Do we have any cached data in redis related to this query
    //as we use promisify, we can use await
    const cachedBlogs = await client.get(req.user.id)
    // If yes, then responde to the request right away and return 
    if(cachedBlogs) {
        console.log('SERVING FROM CACHE')
      return res.send(cachedBlogs)
    } 
    
    //query with all the blogpost
    const blogs = await Blog.find({ _user: req.user.id }).cache({
      key: req.user.id
    });
    console.log('SERVING FROM CACHE')
    res.send(blogs);

    const stringifyValue = json.parse(blogs)
    //if no, we need to respond to request and update our cache to store the data
    client.selected_db(req.user.id, stringifyValue)
  });
*/