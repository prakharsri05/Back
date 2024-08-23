import { HackathonExperienceWhereInput } from "./HackathonExperienceWhereInput";
import { HackathonExperienceOrderByInput } from "./HackathonExperienceOrderByInput";

export type HackathonExperienceFindManyArgs = {
  where?: HackathonExperienceWhereInput;
  orderBy?: Array<HackathonExperienceOrderByInput>;
  skip?: number;
  take?: number;
};
