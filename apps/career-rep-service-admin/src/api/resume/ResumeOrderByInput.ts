import { SortOrder } from "../../util/SortOrder";

export type ResumeOrderByInput = {
  createdAt?: SortOrder;
  file?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  uploadDate?: SortOrder;
};
