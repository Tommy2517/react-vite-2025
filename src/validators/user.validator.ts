import Joi from "joi";

const userValidator = Joi.object({
    username: Joi.string().pattern(/^.{4,}$/).required().messages({
        "string.pattern.base":"Only chars allowed & this must be at least 4 characters."
    }),
    password: Joi.string().min(4).max(10).required().messages({
        "string.min": "password can be at least 3 chars",
        "string.max": "password cannot be gt 6 chars",
    }),
    age: Joi.number().min(10).max(118).required().messages({
        "number.min": "min age is 1",
        "number.max": "max age is 117",
    })
})

export default userValidator;