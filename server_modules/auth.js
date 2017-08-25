args = require('./args');
var basicAuth = require('express-basic-auth');

var middleware = (req, res, next) => next();

if (args.user && args.password) {
    middleware = basicAuth({
        authorizer: adminAuthorizer,
        challenge: true
    });
}

exports.middleware = middleware;


function adminAuthorizer(user, password) {
    return (args.user === user) && (args.password === password)
}
