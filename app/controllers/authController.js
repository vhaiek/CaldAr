const bcypt = require ('bcrypt');
const jwt = require('jasonwebtoken');
const models = require('../models');

const register = async (req, res) =>{
    try {
        const user = new models.Users({
            email:req.body.email,
            password: await bcrypt.hash(req.body.password, 10),
        });
        const result = await user.save();
        return res.status(200).json(result);
    }catch (err){
        return res.status(500).json({
            Error: err.message,
            Code: err.code,
            Value: err.keyValue,
            Pattern: err.KeyPattern,
        });
    }
};

const login = async (req, res)=>{
    const user= await models.Users.findOne ({email: req.body.email});
    if (!user){
        return res.status(401).json({
            message: 'Invalid user credentials',
        });
    }
    const match = await bcrypt.compare(req.body.password, user.password);
    if (match){
        const token = await jwt.sing(
            {
                email:user.email,
                userId: user._id,
            },
            process.env.JWT_KEY,
            {
                expiresIn: '15m',
            },
        );
        await models.Users.findOneAndUpdate({email: req.body.email},{ token });
        return res.status(200).json({
            message: 'Sucess',
            token,
        });
    }
    return res.status(401).json({
        message: 'Invalid user credentials',
    });
};

const logout = async (req, res)=> {
    const decoded = await jwt.verify(req.headers.token, process.env.JWT_KEY, null);
    const user = await models.Users.findById(decoded.userId);
    if (!user){
        return res.status(401).json({
            message: 'Invalid user credentials',
        });
    }
    await models.Users.findByIdAndUpdate(decoded.userId, {token: ''});
    return res.status(200).json({
        message: 'Success',
    });
};

module.exports = {
    register,
    login,
    logout
};

