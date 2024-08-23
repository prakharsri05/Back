import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InternshipExperienceServiceBase } from "./base/internshipExperience.service.base";

@Injectable()
export class InternshipExperienceService extends InternshipExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
