import type { JSX } from "@beeq/core";
import { BqInput } from "@beeq/react";
import {
  type FieldPath,
  type FieldValues,
  type UseControllerProps,
  useController,
} from "react-hook-form";

export interface ControlledInputProps<
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
> extends UseControllerProps<TFieldValues, TName>,
    Omit<JSX.BqInput, "name"> {
  label: string;
}

export const ControlledInput = <
  TFieldValues extends FieldValues,
  TName extends FieldPath<TFieldValues>,
>({
  control,
  defaultValue,
  label,
  name,
  rules,
  ...props
}: ControlledInputProps<TFieldValues, TName>) => {
  const { field, fieldState } = useController({
    control,
    defaultValue,
    name,
    rules,
  });

  return (
    <>
      <BqInput
        ref={field.ref}
        name={field.name}
        value={field.value}
        onBqInput={field.onChange}
        onBqBlur={field.onBlur}
        {...props}
        validationStatus={fieldState.invalid ? "error" : "none"}
      >
        <span slot="label">{label}</span>
        {fieldState.error ? (
          <span slot="helper-text">
            {fieldState.error.message || fieldState.error.type}
          </span>
        ) : null}
      </BqInput>
    </>
  );
};
