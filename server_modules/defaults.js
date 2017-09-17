const fileSystem = require('./file_system');
const ipAddress = require('ip').address();
const args = require('./args');

var defaults =  {};
defaults.settings = {
    tables: [{name: 'Table 1'}],
    referees: [{name: 'Head referee'}],
    askTable: true,
    askReferee: true,
    mhub: `ws://${ipAddress}:13900`,
    node: 'default',
    challenge: '2017_en_US',
    host: `http://${ipAddress}:${args.port}/`,
    autoPublish: true,
};

function createDefaultSettings() {
    file = fileSystem.getDataFilePath('settings.json');
    fileSystem.readFile(file).catch(function () {
        console.log('creating default settings file');
        fileSystem.writeFile(file, JSON.stringify(defaults.settings))
    })
}

exports.createDefaultFiles = function () {
    createDefaultSettings();
};
