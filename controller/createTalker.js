const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const create = async (req, res, next) => {
    try {
        const data = await fs.readFile(DATAFILE, 'utf8');
        const talkers = JSON.parse(data);
        const lastId = talkers[talkers.length - 1].id;

        const newTalker = { id: lastId + 1, ...req.body };
        talkers.push(newTalker);

        const stringifiedTalkers = JSON.stringify(talkers);
        await fs.writeFile(DATAFILE, stringifiedTalkers);

        return res.status(201).json(newTalker);
    } catch (e) {
        next(e);
    }
};

module.exports = create;
