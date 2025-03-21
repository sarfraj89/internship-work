import Joi from "joi";

export const validateNotification = (req, res, next) => {
  const schema = Joi.object({
    message: Joi.string().required().messages({
      "string.empty": "Message cannot be empty",
      "any.required": "Message is required",
    }),
    read: Joi.boolean().required().messages({
      "any.required": "Read status is required",
    }),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }

  next();
};
