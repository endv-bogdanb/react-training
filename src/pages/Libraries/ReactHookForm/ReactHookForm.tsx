import type { FC } from "react";
import { useForm } from "react-hook-form";
import { ControlledInput } from "./ControllerInput";

export const ReactHookForm: FC = () => {
  const { control, watch } = useForm({
    defaultValues: { firstName: "", lastName: "" },
    mode: "all",
  });
  return (
    <>
      <h2>Hook form</h2>
      <ControlledInput
        control={control}
        name="firstName"
        label={"First Name"}
        rules={{
          validate: (value) => {
            if (!value) {
              return "Invalid field";
            }
          },
        }}
      />
      <ControlledInput control={control} name="lastName" label={"Last Name"} />
      <pre>{JSON.stringify(watch(), null, 2)}</pre>
    </>
  );
};
