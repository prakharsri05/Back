import { HackathonExperience as THackathonExperience } from "../api/hackathonExperience/HackathonExperience";

export const HACKATHONEXPERIENCE_TITLE_FIELD = "name";

export const HackathonExperienceTitle = (
  record: THackathonExperience
): string => {
  return record.name?.toString() || String(record.id);
};
