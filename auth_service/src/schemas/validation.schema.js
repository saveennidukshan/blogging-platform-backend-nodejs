import Joi from "joi";

export const registerSchema = Joi.object({
  username: Joi.string()
    .trim()
    .min(3)
    .max(30)
    .pattern(/^[a-zA-Z0-9_]+$/)
    .required()
    .messages({
      "string.empty": "Username is required",
      "string.min": "Username must be at least 3 characters",
      "string.max": "Username cannot exceed 30 characters",
      "string.pattern.base":
        "Username can only contain letters, numbers, and underscores",
      "any.required": "Username is required",
    }),

  email: Joi.string()
    .trim()
    .lowercase()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: false, // allow any valid TLD
      },
    })
    .max(254)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email address",
      "string.max": "Email is too long",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .min(8)
    .max(128)
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()[\]{}\-_=+|\\:;"'<>,./~`]).+$/
    )
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password cannot exceed 128 characters",
      "string.pattern.base":
        "Password must contain uppercase, lowercase, number and special character",
      "any.required": "Password is required",
    }),
})
  .options({
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true,
  });


export const loginSchema = Joi.object({
  email: Joi.string()
    .trim()
    .lowercase()
    .email({
      minDomainSegments: 2,
      tlds: {
        allow: false,
      },
    })
    .max(254)
    .required()
    .messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email address",
      "string.max": "Email is too long",
      "any.required": "Email is required",
    }),

  password: Joi.string()
    .min(8)
    .max(128)
    .required()
    .messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 8 characters",
      "string.max": "Password cannot exceed 128 characters",
      "any.required": "Password is required",
    }),
})
  .options({
    abortEarly: false,
    allowUnknown: false,
    stripUnknown: true,
  });