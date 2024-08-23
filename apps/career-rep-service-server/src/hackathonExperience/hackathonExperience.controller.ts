import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HackathonExperienceService } from "./hackathonExperience.service";
import { HackathonExperienceControllerBase } from "./base/hackathonExperience.controller.base";

@swagger.ApiTags("hackathonExperiences")
@common.Controller("hackathonExperiences")
export class HackathonExperienceController extends HackathonExperienceControllerBase {
  constructor(protected readonly service: HackathonExperienceService) {
    super(service);
  }
}
