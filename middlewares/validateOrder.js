import Joi from "joi";

const validateOrder = (req, res, next) => {
  const schema = Joi.object({
    customername: Joi.string().min(5).required(),
    customeremail: Joi.string().email().required(),
    customerphonenumber: Joi.number()
      .integer()
      .min(1000000000)
      .max(9999999999)
      .required(),
    shippingaddress: Joi.object({
      street: Joi.string().required(),
      city: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
    }).required(),
    orderdate: Joi.date().optional(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ message: "Validation error", details: error.details });
  }

  next();
};

export default validateOrder;
