import { InternshipExperience as TInternshipExperience } from "../api/internshipExperience/InternshipExperience";

export const INTERNSHIPEXPERIENCE_TITLE_FIELD = "company";

export const InternshipExperienceTitle = (
  record: TInternshipExperience
): string => {
  return record.company?.toString() || String(record.id);
};
