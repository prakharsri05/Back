import { InternshipExperienceWhereInput } from "./InternshipExperienceWhereInput";
import { InternshipExperienceOrderByInput } from "./InternshipExperienceOrderByInput";

export type InternshipExperienceFindManyArgs = {
  where?: InternshipExperienceWhereInput;
  orderBy?: Array<InternshipExperienceOrderByInput>;
  skip?: number;
  take?: number;
};
