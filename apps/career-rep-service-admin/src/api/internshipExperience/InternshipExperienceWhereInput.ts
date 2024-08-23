import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InternshipExperienceWhereInput = {
  company?: StringNullableFilter;
  endDate?: DateTimeNullableFilter;
  id?: StringFilter;
  role?: StringNullableFilter;
  startDate?: DateTimeNullableFilter;
};
