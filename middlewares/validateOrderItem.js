import Joi from "joi";

const productSchema = Joi.object({
  productId: Joi.string().required(),
  name: Joi.string().required(),
  price: Joi.number().required(),
  originalPrice: Joi.number().required(),
  discount: Joi.number().required(),
  currency: Joi.string().default("INR"),
  taxIncluded: Joi.boolean().default(true),
  shippingInfo: Joi.string(),
  availability: Joi.string().required(),
  quantity: Joi.number().required(),
  weight: Joi.string(),
  dimensions: Joi.object({
    height: Joi.string(),
    width: Joi.string(),
    depth: Joi.string(),
  }),
  description: Joi.string(),
  category: Joi.string(),
  material: Joi.string(),
  stonework: Joi.boolean(),
  images: Joi.array().items(Joi.string()),
  pickupLocation: Joi.object({
    locationName: Joi.string(),
    availability: Joi.string(),
  }),
  contactInfo: Joi.object({
    phone: Joi.string(),
    email: Joi.string().email(),
  }),
  careInstructions: Joi.array().items(Joi.string()),
  shippingAndReturns: Joi.string(),
  sku: Joi.string().required(),
});

const validateOrderItem = (req, res, next) => {
  const { error } = productSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};
export default validateOrderItem;
