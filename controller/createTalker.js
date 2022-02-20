const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const create = async (req, res, next) => {
    try {
        const data = await fs.readFile(DATAFILE);
        const talkers = JSON.parse(data);

        const newTalker = req.body;
        talkers.push(newTalker);

        const stringifiedTalkers = JSON.stringify(talkers);
        await fs.writeFile(DATAFILE, stringifiedTalkers);

        return res.status(201).send({ newTalker });
    } catch (e) {
        next(e);
    }
};

module.exports = create;
