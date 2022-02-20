const tokenVal = (req, res, next) => {
    const { token } = req.header.Authorization;
    console.log(token);

    if (!token) {
        return res.status(401).json({ message: 'Token não encontrado' });
    }

    // if (token = createTalken) {
    //     return res.status(401).json({ message: 'Token inválido' })
    // }

    next();
};

module.exports = tokenVal;
