const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const read = async (_req, res, next) => {
    try {
        const data = await fs.readFile(DATAFILE);
        // const talkers = data.toString().split('\n');
        // https://stackabuse.com/reading-and-writing-json-files-with-node-js/
        const talkers = JSON.parse(data);

        if (!talkers) {
            return res.status(200).send([]);
        }

        return res.status(200).send(talkers);
    } catch (e) {
        return next(e);
    }
};

module.exports = read;
