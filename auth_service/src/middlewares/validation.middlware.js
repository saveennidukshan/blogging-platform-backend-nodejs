import { BadRequestResponse } from "../helpers/response.helper.js";

export const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
        const errorMessage = error.details.map((err) => ({
          field: err.path.join("."),
          message: err.message,
        }))
        return new BadRequestResponse("Credetials error", errorMessage).send(res);
    }
    req.body = value;
    next();
  };
};