import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type StudentWhereInput = {
  email?: StringNullableFilter;
  githubLink?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
