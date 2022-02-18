const fs = require('fs/promises');
const express = require('express');

const router = express.Router();

const DATAFILE = 'talker.json';

const errorM = {
    message: 'Pessoa palestrante não encontrada',
};

const read = async (req, res, next) => {
    try {
        const { id } = req.params;
        console.log(id);
        const data = await fs.readFile(DATAFILE);
        const talkers = JSON.parse(data);

        const found = talkers.find((talker) => talker.id === Number(id));

        console.log(found);

        if (!found) {
            return res.status(404).json(errorM);
        }

        return res.status(200).send(found);
    } catch (e) {
        next(e);
    }
};

router.get('/talker/:id', read);

module.exports = router;