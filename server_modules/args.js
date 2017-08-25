var argv = require('minimist')(process.argv.slice(2));

exports.port = argv.p || 1390;
exports.user = argv.u ? argv.u.split(":")[0] : "";
exports.password = argv.u ? argv.u.split(":")[1] : "";
exports.datadir = argv.d || 'data';
exports.slaveMode = argv.s || false;
