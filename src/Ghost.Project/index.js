process.env.server__port = process.env.PORT;
var ghost = require('ghost');

ghost().then(function (ghostServer) {
    ghostServer.start();
});