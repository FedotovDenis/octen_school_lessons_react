import joi from 'joi';

const DateValidation = joi.object({
    userId: joi.number()
        .min(1)
        .max(10) // Изменили на 10, так как у нас 10 пользователей
        .required()
        .messages({
            "number.base": "User Id must be a number",
            "number.min": "User Id must be at least 1",
            "number.max": "User Id must be at most 10", // Изменили на 10
            "any.required": "User Id is required"
        }),
    title: joi.string()
        .min(3)
        .max(100)
        .required()
        .messages({
            "string.base": "Title must be a string",
            "string.min": "Title must be at least 3 characters long",
            "string.max": "Title must be at most 100 characters long",
            "any.required": "Title is required"
        }),
    body: joi.string()
        .min(3)
        .max(500)
        .required()
        .messages({
            "string.base": "Body must be a string",
            "string.min": "Body must be at least 3 characters long",
            "string.max": "Body must be at most 500 characters long",
            "any.required": "Body is required"
        })
});

export default DateValidation;