const jwt = require('jsonwebtoken');
require('dotenv').config();

//const secret = process.env.JWT_SECRET;
const secret = 'superSecrett'
const expiration = '2h';

module.exports = {
    signToken: function ({ _id, username, email }) {
        const payload = { _id, username, email };
        return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
    },
};