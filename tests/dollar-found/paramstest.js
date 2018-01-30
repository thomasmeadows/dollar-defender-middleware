const test = require('tape');
const dollarDefender = require('../../');
const dollarDefenderMiddleware = dollarDefender();

test('req.params fail', function (t) {
    t.plan(1);

    dollarDefenderMiddleware({
      params: {
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
