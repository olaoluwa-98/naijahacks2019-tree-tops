const { hooks } = require("@adonisjs/ignitor");

hooks.after.providersBooted(() => {
  const Validator = use("Validator");
  const { sanitizor } = Validator;

  // Setup Validators
  const validators = require("./validations");
  for (const [key, fn] of Object.entries(validators)) {
    Validator.extend(key, fn);
  }

  /// Setup Sanitizers
  const sanitizers = require("./sanitizers");
  for (const [key, fn] of Object.entries(sanitizers)) {
    sanitizor[key] = fn;
  }
});
