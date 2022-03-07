To run server

1. sudo npm i 
2. npm run dev
   

To run the client

1. cd client
2. sudo npm i
3. npm run dev

##### To configure redis

Test redis in terminal:

node
> const redisUrl = 'redis://127.0.0.1:6379';
> const client = redis.createClient(redisUrl)

##### To configure MongoDB

### Add your .env 

#### testing session

In the terminal

const session = 'axjhXD19293809KLLJHaswS'
const Buffer = require('safe-buffer').Buffer
Buffer.from(session, 'base64').toString('utf8')
-----> Shows the passport user from mongodb

### In the CI 
- Add a ci.js into the key file
- Change the redis url to a production url in the key file
- Add the url of redis in the ci.js
- Add the mongo url in the ci.js
- Be sure the server retrieves the react app in production CI. Check Line 40 in the index.js file
  
change the page.js file for production. It is referring to tests.

headless: true, 
args: ['--no-sandbox']

Change the line 38 'localhost:4659/blogs' into: 
await this.page('http://localhost:4659/blogs') http protocol in the tests files.s

Change the url of localhost ing http protocol.

### Configure github
1. Create a repository
2. Configure if you are parting from the origin repo.
   git remote -v
   git remote remove origin 
   git remove -v
   git remote add origini link of your github repo
    git add .
    git commit ...
    git push origin master

### Configure travis

1. Create an account
2. In my repositories link to github
3. Select the repo of the project
4. Activate the CI
   
Git all the changes 
Upload changes

And check Travis CI dashboard.
You must be on branch master

If everything is ok.  The build was success.

