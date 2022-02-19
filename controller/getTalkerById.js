const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const findById = async (req, res, next) => {
    try {
        const { id } = req.params;
        const data = await fs.readFile(DATAFILE);
        const talkers = JSON.parse(data);

        const found = talkers.find((talker) => talker.id === Number(id));

        if (!found) {
            return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
        }

        return res.status(200).send(found);
    } catch (e) {
        return next(e);
    }
};

module.exports = findById;