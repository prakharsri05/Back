import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResumeServiceBase } from "./base/resume.service.base";

@Injectable()
export class ResumeService extends ResumeServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
