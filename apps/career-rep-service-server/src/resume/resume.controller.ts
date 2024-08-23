import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResumeService } from "./resume.service";
import { ResumeControllerBase } from "./base/resume.controller.base";

@swagger.ApiTags("resumes")
@common.Controller("resumes")
export class ResumeController extends ResumeControllerBase {
  constructor(protected readonly service: ResumeService) {
    super(service);
  }
}
