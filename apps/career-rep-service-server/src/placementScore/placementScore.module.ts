import { Module } from "@nestjs/common";
import { PlacementScoreModuleBase } from "./base/placementScore.module.base";
import { PlacementScoreService } from "./placementScore.service";
import { PlacementScoreController } from "./placementScore.controller";
import { PlacementScoreResolver } from "./placementScore.resolver";

@Module({
  imports: [PlacementScoreModuleBase],
  controllers: [PlacementScoreController],
  providers: [PlacementScoreService, PlacementScoreResolver],
  exports: [PlacementScoreService],
})
export class PlacementScoreModule {}
