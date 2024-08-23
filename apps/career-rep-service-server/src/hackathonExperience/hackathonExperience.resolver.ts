import * as graphql from "@nestjs/graphql";
import { HackathonExperienceResolverBase } from "./base/hackathonExperience.resolver.base";
import { HackathonExperience } from "./base/HackathonExperience";
import { HackathonExperienceService } from "./hackathonExperience.service";

@graphql.Resolver(() => HackathonExperience)
export class HackathonExperienceResolver extends HackathonExperienceResolverBase {
  constructor(protected readonly service: HackathonExperienceService) {
    super(service);
  }
}
