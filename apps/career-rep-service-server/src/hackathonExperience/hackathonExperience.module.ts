import { Module } from "@nestjs/common";
import { HackathonExperienceModuleBase } from "./base/hackathonExperience.module.base";
import { HackathonExperienceService } from "./hackathonExperience.service";
import { HackathonExperienceController } from "./hackathonExperience.controller";
import { HackathonExperienceResolver } from "./hackathonExperience.resolver";

@Module({
  imports: [HackathonExperienceModuleBase],
  controllers: [HackathonExperienceController],
  providers: [HackathonExperienceService, HackathonExperienceResolver],
  exports: [HackathonExperienceService],
})
export class HackathonExperienceModule {}
