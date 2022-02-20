const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const deleteTalker = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await fs.readFile(DATAFILE, 'utf8');
        const talkers = JSON.parse(data);

        talkers.splice(id - 1, 1);

        const stringifiedTalkers = JSON.stringify(talkers, null, 2);
        await fs.writeFile(DATAFILE, stringifiedTalkers);

        return res.status(204).end();
    } catch (e) {
        next(e);
    }
};

module.exports = deleteTalker;