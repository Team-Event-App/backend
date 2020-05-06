const Validator = require("validator");
const isEmpty = require("is-empty");
module.exports = function validateRegisterInput(data) {
  let errors = {};
// Convert empty fields to an empty string so we can use validator functions
  data.username = !isEmpty(data.username) ? data.username : "";
  data.fullname = !isEmpty(data.fullname) ? data.fullname : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.password = !isEmpty(data.password) ? data.password : "";
 
// Name checks
  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
// Email checks
  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  } else if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }
  // Phone checks
  if (Validator.isEmpty(data.phone)) {
    errors.password = "Phone field is required";
  }
// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }

if (!Validator.isLength(data.password, { min: 8, max: 30 })) {
    errors.password = "Password must be at least 8 characters";
  }

return {
    errors,
    isValid: isEmpty(errors)
  };
};