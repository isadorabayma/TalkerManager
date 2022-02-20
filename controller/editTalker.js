// https://ricardo-reis.medium.com/splice-969723f47d26
const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const editTalker = async (req, res, next) => {
    try {
        const { name, age, talk } = req.body;
        const { id } = req.params;
        const data = await fs.readFile(DATAFILE, 'utf8');
        const talkers = JSON.parse(data);
        const found = talkers.find((talker) => talker.id === Number(id));

        const editedTalker = { id: found.id, name, age, talk };
        talkers.splice(id - 1, 1, editedTalker);

        const stringifiedTalkers = JSON.stringify(talkers, null, 2);
        await fs.writeFile(DATAFILE, stringifiedTalkers);

        return res.status(200).json(editedTalker);
    } catch (e) {
        next(e);
    }
};

module.exports = editTalker;
