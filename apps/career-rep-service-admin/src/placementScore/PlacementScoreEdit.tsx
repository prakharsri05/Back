import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  NumberInput,
} from "react-admin";

export const PlacementScoreEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="dateCalculated" source="dateCalculated" />
        <NumberInput label="score" source="score" />
      </SimpleForm>
    </Edit>
  );
};
