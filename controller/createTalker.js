const create = (req, res, next) => {
    try {
        // const { email, password } = req.body;
        console.log('x');

        return res.status(200).send('ok');
    } catch (e) {
        next(e);
    }
};

module.exports = create;
