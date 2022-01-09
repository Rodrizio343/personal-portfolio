const Joi = require("joi");

const loginSchemaValidator = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

const projectCreateShemaValidator = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  github: Joi.string().uri().required().allow(""),
  link: Joi.string().uri().required().allow(""),
  technologies: Joi.alternatives().try(
    Joi.string().required(),
    Joi.array().required()
  ),
  image: Joi.string(),
});

const projectUpdateShemaValidator = Joi.object({
  title: Joi.string(),
  description: Joi.string(),
  github: Joi.string().uri().required().allow(""),
  link: Joi.string().uri().required().allow(""),
  technologies: Joi.alternatives().try(
    Joi.string().required(),
    Joi.array().required()
  ),
  image: Joi.string(),
});

const projectDeleteShemaValidor = Joi.object({
  id: Joi.string().required(),
});


module.exports = {
  loginSchemaValidator,
  projectCreateShemaValidator,
  projectDeleteShemaValidor,
  projectUpdateShemaValidator
};
