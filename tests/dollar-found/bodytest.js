const test = require('tape');
const dollarDefender = require('../../');
const dollarDefenderMiddleware = dollarDefender();

test('req.body fail', function (t) {
    t.plan(1);

    dollarDefenderMiddleware({
      body: {
        nestedObject: {
          hi: 'you are',
          $gt: ''
        }
      }
    }, {
      status: function(status) {
        return {
          send: function(send) {
            t.pass();
          }
        };
      }
    }, () => {
      t.fail();
    })

});
