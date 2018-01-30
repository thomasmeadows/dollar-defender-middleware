# dollar-defender-middleware
Dollar defender middleware is express middleware protects against Dollar $ injection attacks for Sequelize, Waterline, and Mongoose

This is a very simple module that checks req.params, req.body and req.query for objects and recursively scans for the $ symbol as the first property key and responds with an error if it is detected.

The primary reason for this is because sometimes coders forget to right validators for route and this can be a huge security issue as described in this article at https://blog.websecurify.com/2014/08/hacking-nodejs-and-mongodb.html

### install
```javascript
  npm install dollar-defender-middleware
```

### usage
To use this module simple initialize it after your json parser.
```javascript
  const dollarDefender = require('dollar-defender-middleware');
  app.use(bodyParser.json());
  app.use(dollarDefender(/* optionional config object */));
```

A config object can be passed in with the following otpional settings
```javascript
  {
    statusCode: 500,
    message: 'message to respond with',
    hook: function(req) {
      /* log here or email an admin if someone is trying to attack you with a dollar injection */
    }
  }
```

### development
Run test for developing in the normal way
```
  npm run test
```
