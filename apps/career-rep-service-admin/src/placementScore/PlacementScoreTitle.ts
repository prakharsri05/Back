import { PlacementScore as TPlacementScore } from "../api/placementScore/PlacementScore";

export const PLACEMENTSCORE_TITLE_FIELD = "id";

export const PlacementScoreTitle = (record: TPlacementScore): string => {
  return record.id?.toString() || String(record.id);
};
