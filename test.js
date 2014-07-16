var redisScan   = require('./index.js');
var redis       = require('redis').createClient();

redisScan({
    redis: redis,
    each_callback: function (type, subkey, idx, length, value, cb) {
        console.log(type, subkey, idx, length, value);
        cb();
    },
    done_callback: function (err) {
        console.log("-=-=-=-=-=--=-=-=-");
        redis.quit();
    }
});
