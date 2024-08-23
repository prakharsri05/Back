import * as graphql from "@nestjs/graphql";
import { ResumeResolverBase } from "./base/resume.resolver.base";
import { Resume } from "./base/Resume";
import { ResumeService } from "./resume.service";

@graphql.Resolver(() => Resume)
export class ResumeResolver extends ResumeResolverBase {
  constructor(protected readonly service: ResumeService) {
    super(service);
  }
}
