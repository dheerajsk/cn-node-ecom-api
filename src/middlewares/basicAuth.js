
const basicAuth = require("express-basic-auth");

function myAuthorizer(username, password) {
    const userMatches = basicAuth.safeCompare(username, 'user');
    const passwordMatches = basicAuth.safeCompare(password, 'pass');
    return userMatches & passwordMatches;
}

const bauth = basicAuth({
    authorizer: myAuthorizer,
    challenge: true,
});

module.exports.bauth=bauth;