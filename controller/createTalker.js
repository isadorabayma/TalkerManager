const fs = require('fs/promises');

const DATAFILE = 'talker.json';

const create = async (req, res, next) => {
    try {
        const { name, age, talk } = req.body;
        const data = await fs.readFile(DATAFILE, 'utf8');
        const talkers = JSON.parse(data);
        const lastId = talkers[talkers.length - 1].id;

        const newTalker = { id: lastId + 1, name, age, talk };
        talkers.push(newTalker);
        
// null, 2 corrigem a formatação do json
        const stringifiedTalkers = JSON.stringify(talkers, null, 2);
        await fs.writeFile(DATAFILE, stringifiedTalkers);

        return res.status(201).json(newTalker);
    } catch (e) {
        next(e);
    }
};

module.exports = create;
