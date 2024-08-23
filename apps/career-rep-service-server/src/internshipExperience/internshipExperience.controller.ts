import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InternshipExperienceService } from "./internshipExperience.service";
import { InternshipExperienceControllerBase } from "./base/internshipExperience.controller.base";

@swagger.ApiTags("internshipExperiences")
@common.Controller("internshipExperiences")
export class InternshipExperienceController extends InternshipExperienceControllerBase {
  constructor(protected readonly service: InternshipExperienceService) {
    super(service);
  }
}
