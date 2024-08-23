import { JsonFilter } from "../../util/JsonFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ResumeWhereInput = {
  file?: JsonFilter;
  id?: StringFilter;
  uploadDate?: DateTimeNullableFilter;
};
