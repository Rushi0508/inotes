const {body, validationResult} = require("express-validator");

module.exports.validateUserRules = ()=>{
    return [body("name", "Name should be minimum 3 length").isLength({min: 3}), body("email").isEmail(), body("password", "Password should be of min 5 characters").isLength({min: 5})];
}

module.exports.validateUser = (req,res,next)=>{
    
    const errors = validationResult(req);
    if (errors.isEmpty()) {
        return next();
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
    return res.status(422).json({
        errors: extractedErrors,
    })
}