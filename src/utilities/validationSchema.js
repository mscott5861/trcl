export const atLeastFiveSchema = {
  schema: "(.*[a-zA-Z0-9]){5}",
  errorMessage: "This field requires at least 5 alphanumeric characters."
};

export const requiredSchema = {
  schema: "(.*[a-zA-Z0-9]){2}",
  errorMessage: "This is a required field."
};
 
