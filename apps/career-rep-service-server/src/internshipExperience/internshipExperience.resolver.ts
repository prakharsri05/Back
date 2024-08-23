import * as graphql from "@nestjs/graphql";
import { InternshipExperienceResolverBase } from "./base/internshipExperience.resolver.base";
import { InternshipExperience } from "./base/InternshipExperience";
import { InternshipExperienceService } from "./internshipExperience.service";

@graphql.Resolver(() => InternshipExperience)
export class InternshipExperienceResolver extends InternshipExperienceResolverBase {
  constructor(protected readonly service: InternshipExperienceService) {
    super(service);
  }
}
