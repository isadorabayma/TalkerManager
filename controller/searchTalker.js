const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const searchTalker = async (req, res, next) => {
    try {
        const { q = '' } = req.query;

        const data = await fs.readFile(DATAFILE, 'utf8');
        const talkers = JSON.parse(data);

        const founds = talkers.filter((talker) => talker.name.toLowerCase()
            .includes(q.toLowerCase()));

        return res.status(200).json(founds);
    } catch (e) {
        next(e);
    }
};

module.exports = searchTalker;