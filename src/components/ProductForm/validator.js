const isString = (input) => {
  if (input !== undefined) {
    if (input.trim() === "" || input.length < 2) return false;
    else return true;
  } else {
    return false;
  }
};

const isNumber = (input) => {
  if (input !== undefined) {
    if (input < 1) return false;
    else return true;
  } else {
    return false;
  }
};

export const validatePostData = (data) => {
  let errors = {};

  if (!isString(data.title)) errors.title = "Must be at least 5 Characters";
  if (!isString(data.description))
    errors.description = "Must be at least 5 Characters";
  if (!isString(data.link)) errors.link = "Must be at least 5 characters";
  if (!isString(data.price)) errors.price = "Must be at least 1 character";
  if (!isString(data.currency))
    errors.currency = "Must be at least 1 character";
  if (!isNumber(data.quantity)) errors.quantity = "Must be greater than 0";
  if (!isString(data.brand)) errors.brand = "Must be at least 1 character";
  if (!isString(data.color)) errors.color = "Must be atleast 1 character";
  if (!isString(data.gender)) errors.gender = "Must be at least 1 character";
  if (!isString(data.condition))
    errors.condition = "Must be at least 1 character";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
