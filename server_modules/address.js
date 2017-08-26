var ip = require('ip')
var args = require('./args')


exports.middleware = function (req, res, next) {
    req.session.serverAddress = ip.address() + ':' + args.port;
    next();
};
