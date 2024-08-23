import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PlacementScoreServiceBase } from "./base/placementScore.service.base";

@Injectable()
export class PlacementScoreService extends PlacementScoreServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
