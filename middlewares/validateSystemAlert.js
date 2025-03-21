import Joi from "joi";

export const validateSystemAlert = (req, res, next) => {
  const schema = Joi.object({
    title: Joi.string().required().messages({
      "string.empty": "Title cannot be empty",
      "any.required": "Title is required",
    }),
    description: Joi.string().required().messages({
      "string.empty": "Description cannot be empty",
      "any.required": "Description is required",
    }),
    priority: Joi.string().valid("low", "medium", "high").required().messages({
      "any.only": "Priority must be 'low', 'medium', or 'high'",
      "any.required": "Priority is required",
    }),
    createdBy: Joi.string().required().messages({
      "string.empty": "Created By cannot be empty",
      "any.required": "Created By is required",
    }),
    expiresAt: Joi.date().optional(),
    isActive: Joi.boolean().optional(),
  });

  const { error } = schema.validate(req.body, { abortEarly: false });

  if (error) {
    const errorMessages = error.details.map((detail) => detail.message);
    return res.status(400).json({ errors: errorMessages });
  }

  next();
};
