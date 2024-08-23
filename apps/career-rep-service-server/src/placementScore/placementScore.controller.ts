import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PlacementScoreService } from "./placementScore.service";
import { PlacementScoreControllerBase } from "./base/placementScore.controller.base";

@swagger.ApiTags("placementScores")
@common.Controller("placementScores")
export class PlacementScoreController extends PlacementScoreControllerBase {
  constructor(protected readonly service: PlacementScoreService) {
    super(service);
  }
}
