import React from "react";
import { IconContainer, InputContainer, InputText, ErrorText } from "./styles";
import { Controller } from "react-hook-form";

const Input = ({ leftIcon, name, control, errorMessagge ,...rest}) => {
  return (
    <>
    <InputContainer>
      {leftIcon ? (<IconContainer>{leftIcon}</IconContainer>) :null}

      <Controller
        name={name}
        control={control}
        rules={{required: true}}
        render={({ field }) => <InputText {...field} {...rest} />}
      />
    </InputContainer>
    {errorMessagge ? <ErrorText>{errorMessagge}</ErrorText>: null}
     </>
  );
 
}

export { Input };
