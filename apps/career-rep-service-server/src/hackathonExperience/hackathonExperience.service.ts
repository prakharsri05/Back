import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HackathonExperienceServiceBase } from "./base/hackathonExperience.service.base";

@Injectable()
export class HackathonExperienceService extends HackathonExperienceServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
