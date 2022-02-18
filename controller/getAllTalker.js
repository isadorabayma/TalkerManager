const fs = require('fs/promises');
const express = require('express');

const router = express.Router();

const DATAFILE = 'talker.json';

const read = async (rec, res, next) => {
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
        next(e);
    }
};

router.get('/talker', read);

module.exports = router;
