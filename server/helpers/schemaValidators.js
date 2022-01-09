const Joi = require("joi");

const loginSchemaValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});


module.exports = {
  loginSchemaValidator
};
