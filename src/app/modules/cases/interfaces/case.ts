export interface Case {
  id: number;
  details: string;
  location: Location;
  image_url: string;
  status: CaseStatus;
  created_at: string;
  updated_at?: string;
  comment?: string;
}

export interface Location {
  latitude: number;
  longitude: number;
  address: string;
}

export enum CaseStatus {
  ACTIVE = 0,
  INWORK = 2,
  RESOLVED = 1
}
