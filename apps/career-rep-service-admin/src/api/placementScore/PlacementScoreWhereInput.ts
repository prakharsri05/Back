import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type PlacementScoreWhereInput = {
  dateCalculated?: DateTimeNullableFilter;
  id?: StringFilter;
  score?: FloatNullableFilter;
};
