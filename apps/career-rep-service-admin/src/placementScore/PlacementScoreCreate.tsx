import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PlacementScoreCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="dateCalculated" source="dateCalculated" />
        <NumberInput label="score" source="score" />
      </SimpleForm>
    </Create>
  );
};
