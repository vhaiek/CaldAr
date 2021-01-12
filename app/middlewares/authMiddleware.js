const jwt = require ('jsonwebtoken');
const models = require ('../models');

const checkAuth = async (req, res, next)=>{
    try{
        const { token} = req.headers;
        const decoded = await jwt.verify(token, process.env.JWT_KEY, null);
        const userToken = await models.User.findById(decoded.userId, 'token').exec();
        if (token !== userToken.token) throw new Error ('Invalid Token');
        next();
    } catch (error) {
        res.status(401).json({
            message: 'Unauthorize',
        });
    }
};

module.exports = checkAuth;
