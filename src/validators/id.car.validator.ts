import * as Joi from "joi";

export const idCarValidator = Joi.object({
    id: Joi
        .number()
        .min(13333)
        .max(19999)
        .required()
        .messages({
            "number.empty": "id cannot be empty.",
            "number.min": `id cannot be less than 13333.`,
            "number.max": "id cannot exceed 19999.",
            "number.base": "id must contain only letters (Latin or Cyrillic)."
        }),
})