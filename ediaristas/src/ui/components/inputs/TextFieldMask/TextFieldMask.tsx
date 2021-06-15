import React from "react";
import InputMask from "react-input-mask";
import TextField from "ui/components/inputs/TextField/TextField";
import { OutlinedInputProps } from "@material-ui/core";

export interface TextFieldMaaskProps extends OutlinedInputProps {
  mask: string;
}

const TextFieldMaask: React.FC<TextFieldMaaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMask mask={mask} value={value} onChange={onChange}>
      {() => {
        return <TextField {...props} />;
      }}
    </InputMask>
  );
};

export default TextFieldMaask;
