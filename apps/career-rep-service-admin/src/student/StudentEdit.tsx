import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const StudentEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="githubLink" source="githubLink" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
