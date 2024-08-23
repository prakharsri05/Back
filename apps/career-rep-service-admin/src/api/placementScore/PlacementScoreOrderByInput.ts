import { SortOrder } from "../../util/SortOrder";

export type PlacementScoreOrderByInput = {
  createdAt?: SortOrder;
  dateCalculated?: SortOrder;
  id?: SortOrder;
  score?: SortOrder;
  updatedAt?: SortOrder;
};
