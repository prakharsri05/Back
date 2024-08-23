import { JsonValue } from "type-fest";

export type Resume = {
  createdAt: Date;
  file: JsonValue;
  id: string;
  updatedAt: Date;
  uploadDate: Date | null;
};
