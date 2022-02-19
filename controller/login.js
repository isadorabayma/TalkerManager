// https://www.npmjs.com/package/uuid
// https://medium.com/@norbertofariasmedeiros/five-steps-como-gerar-um-random-token-em-javascript-1e1488a15d28
const { v4: uuidv4 } = require('uuid');

const tolken = uuidv4().split('-').join('').slice(0, 16);

const create = (_req, res, next) => {
    try {
        return res.status(200).send({ token: tolken });
    } catch (e) {
        next(e);
    }
};

module.exports = create;
