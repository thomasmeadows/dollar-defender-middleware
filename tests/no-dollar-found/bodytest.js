const test = require('tape');
const dollarDefender = require('../../');
const dollarDefenderMiddleware = dollarDefender();

test('req.body pass', function (t) {
    t.plan(1);

    dollarDefenderMiddleware({
      body: {
        nestedObject: {
          hi: 'you are',
        }
      }
    }, {
      status: function(status) {
        return {
          send: function(send) {
            t.fail();
          }
        };
      }
    }, () => {
      t.pass();
    })

});
