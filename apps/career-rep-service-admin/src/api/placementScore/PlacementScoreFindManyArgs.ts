import { PlacementScoreWhereInput } from "./PlacementScoreWhereInput";
import { PlacementScoreOrderByInput } from "./PlacementScoreOrderByInput";

export type PlacementScoreFindManyArgs = {
  where?: PlacementScoreWhereInput;
  orderBy?: Array<PlacementScoreOrderByInput>;
  skip?: number;
  take?: number;
};
