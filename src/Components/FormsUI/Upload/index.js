import React from "react";
import { Input } from "@material-ui/core";
import { useField } from "formik";

const InputfieldWrapper = ({ name, ...otherProps }) => {
  const [field, mata] = useField(name);
  const configInputfield = {
    fullWidth: true,
    ...otherProps,
    ...field,
  };

  if (mata && mata.touched && mata.error) {
    configInputfield.error = true;
    configInputfield.helperText = mata.error;
  }
  return <Input {...configInputfield} />;
};

export default InputfieldWrapper;
