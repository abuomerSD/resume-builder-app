import type dayjs from "dayjs";

export interface Experience {
  companyName: string;
  location: string;
  jobTitle: string;
  description: string;
  fromDate: dayjs.Dayjs;
  toDate: dayjs.Dayjs;
}
