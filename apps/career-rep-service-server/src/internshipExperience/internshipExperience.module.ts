import { Module } from "@nestjs/common";
import { InternshipExperienceModuleBase } from "./base/internshipExperience.module.base";
import { InternshipExperienceService } from "./internshipExperience.service";
import { InternshipExperienceController } from "./internshipExperience.controller";
import { InternshipExperienceResolver } from "./internshipExperience.resolver";

@Module({
  imports: [InternshipExperienceModuleBase],
  controllers: [InternshipExperienceController],
  providers: [InternshipExperienceService, InternshipExperienceResolver],
  exports: [InternshipExperienceService],
})
export class InternshipExperienceModule {}
