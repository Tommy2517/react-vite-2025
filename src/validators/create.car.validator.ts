import * as Joi from "joi";

export const createCarValidator = Joi.object({
    brand: Joi
        .string()
        .min(1)
        .max(20)
        .pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/)
        .required()
        .messages({
            "string.empty": "Brand cannot be empty.",
            "string.min": "Brand must have at least 1 character.",
            "string.max": "Brand cannot exceed 20 characters.",
            "string.pattern.base": "Brand must contain only letters (Latin or Cyrillic)."
        }),
    price: Joi
        .number()
        .min(0)
        .max(1000000)
        .required()
        .messages({
            "number.base": "Price must be a number.",
            "number.min": "Price cannot be less than 0.",
            "number.max": "Price cannot exceed 1,000,000."
        }),
    year: Joi
        .number()
        .min(1990)
        .max(2025)
        .required()
        .messages({
            "number.base": "Year must be a number.",
            "number.min": "Year cannot be earlier than 1990.",
            "number.max": "Year cannot be later than 2025."
        })
})