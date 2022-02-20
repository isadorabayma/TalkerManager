const talkVal = (req, res, next) => {
    const { talk } = req.body;
    // https://stackoverflow.com/questions/10194464/javascript-dd-mm-yyyy-date-check
    const dataReg = /(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d/;
   
    if (!talk.watchedAt.match(dataReg)) {
        return res.status(400).json({
             message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
        });
    }

    // https://www.geeksforgeeks.org/javascript-number-isinteger-function/#:~:text=The%20Number.,%2C%20otherwise%2C%20it%20returns%20false.

    if (!Number.isInteger(talk.rate) || talk.rate < 1 || talk.rate > 5) {
        return res.status(400).json({ message: 'O campo "rate" deve ser um inteiro de 1 à 5' });
    }

    next();
};

module.exports = talkVal;
