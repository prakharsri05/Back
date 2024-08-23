import * as graphql from "@nestjs/graphql";
import { PlacementScoreResolverBase } from "./base/placementScore.resolver.base";
import { PlacementScore } from "./base/PlacementScore";
import { PlacementScoreService } from "./placementScore.service";

@graphql.Resolver(() => PlacementScore)
export class PlacementScoreResolver extends PlacementScoreResolverBase {
  constructor(protected readonly service: PlacementScoreService) {
    super(service);
  }
}
